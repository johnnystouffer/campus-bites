from django.shortcuts import render

# Create your views here.
import json
import openai
from openai import OpenAI
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from dotenv import load_dotenv
import os


load_dotenv()

api_key = os.getenv('OPENAI_API_KEY')

client = OpenAI(api_key=api_key)

@csrf_exempt   #Disable CSRF protection for testing; remove in production or use proper CSRF tokens.
def gpt_request(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            user_input = data.get('input', '')


            response = client.chat.completions.create(
                model="gpt-4o-mini",
                messages=[
                    {"role": "user", "content": user_input}
                ],
                max_tokens=150
            )

            gpt_output = response.choices[0].message.content
            

            # Send the GPT response back to the frontend
            return JsonResponse({'output': gpt_output})

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)

    return JsonResponse({'error': 'Invalid request method'}, status=405)
