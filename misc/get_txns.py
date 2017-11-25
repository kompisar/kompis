import json

import requests
import os

CLIENT_ID = os.environ['CLIENT_ID']
CLIENT_SECRET = os.environ['CLIENT_SECRET']
ACCESS_TOKEN = os.environ['ACCESS_TOKEN']


def get_nordea(partial_url, params={}):
    headers = {
        'X-IBM-Client-ID': CLIENT_ID,
        'X-IBM-Client-Secret': CLIENT_SECRET,
        'Authorization': 'Bearer ' + ACCESS_TOKEN,
    }
    url = 'https://api.hackathon.developer.nordeaopenbanking.com' + partial_url
    resp = requests.get(url, params, headers=headers)
    resp.raise_for_status()
    return resp.json()


transactions = []

url = '/v2/accounts/FI6593857450293470-EUR/transactions'
params = {}
while True:
    print(url, params)
    resp = get_nordea(url, params)
    resp = resp['response']
    print(len(transactions))
    transactions.extend(resp['transactions'])
    with open('transactions.json', 'w') as outf:
        json.dump(transactions, outf)

    params['continuationKey'] = resp['_continuationKey']
