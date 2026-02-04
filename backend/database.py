import os
from motor.motor_asyncio import AsyncIOMotorClient

connection_string = motor.motor_asyncio.AsyncIOMotorClient("DATABASE_URL")

client = AsyncIOMotorClient(connection_string)
db = client.CHAMBA_AL_DIA


