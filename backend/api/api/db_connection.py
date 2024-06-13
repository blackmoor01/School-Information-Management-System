import os
from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv()
db_password = os.getenv('DB_PASSWORD')

client = MongoClient('mongodb+srv://klvnafrifaafriyie:' + db_password + '@sms.if1lhrv.mongodb.net/')

db = client['School_Management_System']