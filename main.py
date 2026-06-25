from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

productos = [
    {"id": 1, "nombre": "iPhone 15 — 128GB Negro", "marca": "Apple", "precio": 3299000, "tiendas": ["Amazon", "MercadoLibre"]},
    {"id": 2, "nombre": "PlayStation 5 Slim", "marca": "Sony", "precio": 1899000, "tiendas": ["Falabella", "Alkosto"]},
    {"id": 3, "nombre": "Sony WH-1000XM5", "marca": "Sony", "precio": 899000, "tiendas": ["Amazon", "MercadoLibre"]},
    {"id": 4, "nombre": "MacBook Air M3", "marca": "Apple", "precio": 6500000, "tiendas": ["Amazon"]},
    {"id": 5, "nombre": "Samsung Galaxy S24", "marca": "Samsung", "precio": 2800000, "tiendas": ["Falabella", "MercadoLibre"]},
]

@app.get("/buscar")
def buscar(q: str = ""):
    if not q:
        return productos
    resultados = [p for p in productos if q.lower() in p["nombre"].lower() or q.lower() in p["marca"].lower()]
    return resultados