import json
import openai
from openai import OpenAI
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

client = OpenAI(api_key='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')

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