from django.shortcuts import render

# Create your views here.
import json
import openai
from openai import OpenAI
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from dotenv import load_dotenv
import os
from deals.models import Post

load_dotenv()

with open('gpt/key.txt', 'r') as file:
    api_key = file.read().strip()

client = OpenAI(api_key=api_key)
@csrf_exempt   #Disable CSRF protection for testing; remove in production or use proper CSRF tokens.
def gpt_request(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            user_input = data.get('input', '')
            
            deals = Post.objects.all()
            #make list of dicts for each deal with all attributes in deal as keys
            deals_list = []
            for deal in deals:
                deal_dict = {
                    "address": deal.address,
                    "calorie_per_dollar": deal.calorie_per_dollar,
                    "date_of_event": deal.date_of_event,
                    "time_of_event": deal.time_of_event,
                    "submission_time": deal.submission_time,
                    "approved": deal.approved,
                    "cusine": deal.cuisine,
                    "hosting_organization": deal.hosting_organization,
                    "charity": deal.charity,
                    "event_name": deal.event_name,
                    "description": deal.description,
                    "price": deal.price,
                }
                deals_list.append(deal_dict)
                
                gpt_prompt = "User Prompt" + user_input + "\n\n" + "Here are some deals in the area, Output the info of the most similar one in a sentence with all of the info:\n\n" + "\n\n".join([f"{deal['event_name']} at {deal['address']} for {deal['price']}" for deal in deals_list])
                
                


            response = client.chat.completions.create(
                model="gpt-4o-mini",
                messages=[
                    {"role": "user", "content": gpt_prompt}
                ],
                max_tokens=150
            )

            gpt_output = response.choices[0].message.content
            

            # Send the GPT response back to the frontend
            return JsonResponse({'output': gpt_output})

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)

    return JsonResponse({'error': 'Invalid request method'}, status=405)
