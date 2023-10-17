from fastapi import FastAPI
from pymongo import MongoClient
from decouple import Config

config = Config('.env')  # point to the local .env file

app = FastAPI()

MONGO_URL = config("MONGO_URL", default="mongo-info-ws")

client = MongoClient(MONGO_URL, 27017)
db = client.test_database

@app.get("/")
def read_root():
    item = db.test_collection.find_one()
    return {"Hello": "World", "MongoData": item}