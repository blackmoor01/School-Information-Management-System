import os
from dotenv import load_dotenv
from pymongo import MongoClient

load_dotenv()
db_password = os.getenv('DB_PASSWORD')

client = MongoClient('mongodb+srv://klvnafrifaafriyie:' + db_password + '@sms.if1lhrv.mongodb.net/')

db = client['School_Management_System']