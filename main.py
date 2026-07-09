from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import mysql.connector
from dotenv import load_dotenv
import os

# Cargar variables de entorno desde .env
load_dotenv()

app = FastAPI()

# Configuración de CORS para conectarse al frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Conexión a MySQL usando variables de entorno
def get_connection():
    return mysql.connector.connect(
        host=os.getenv("DB_HOST"),
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASSWORD"),
        database=os.getenv("DB_NAME")
    )

# Productos de prueba
productos = [
    {"id": 1, "nombre": "iPhone 15 — 128GB Negro", "marca": "Apple", "precio": 3299000, "tiendas": ["Amazon", "MercadoLibre"]},
    {"id": 2, "nombre": "PlayStation 5 Slim", "marca": "Sony", "precio": 1899000, "tiendas": ["Falabella", "Alkosto"]},
    {"id": 3, "nombre": "Sony WH-1000XM5", "marca": "Sony", "precio": 899000, "tiendas": ["Amazon", "MercadoLibre"]},
    {"id": 4, "nombre": "MacBook Air M3", "marca": "Apple", "precio": 6500000, "tiendas": ["Amazon"]},
    {"id": 5, "nombre": "Samsung Galaxy S24", "marca": "Samsung", "precio": 2800000, "tiendas": ["Falabella", "MercadoLibre"]},
]

# Endpoint búsqueda de productos
@app.get("/buscar")
def buscar(q: str = ""):
    if not q:
        return productos
    resultados = [p for p in productos if q.lower() in p["nombre"].lower() or q.lower() in p["marca"].lower()]
    return resultados

# Endpoint de registro - guarda el usuario en MySQL
@app.post("/registro")
def registro(datos: dict):
    conn = get_connection()
    cursor = conn.cursor()

    # Verificar si el correo ya existe
    cursor.execute("SELECT id_usuario FROM usuario WHERE correo = %s", (datos["correo"],))
    if cursor.fetchone():
        cursor.close()
        conn.close()
        return {"error": "El correo ya está registrado."}

    # Insertar el nuevo usuario
    cursor.execute(
        "INSERT INTO usuario (nombre, correo, contraseña, fecha_registro) VALUES (%s, %s, %s, NOW())",
        (datos["nombre"], datos["correo"], datos["contraseña"])
    )
    conn.commit()
    cursor.close()
    conn.close()
    return {"mensaje": "Usuario registrado correctamente."}

# Endpoint de login - verifica las credenciales en MySQL
@app.post("/login")
def login(datos: dict):
    conn = get_connection()
    cursor = conn.cursor(dictionary=True)

    # Buscar usuario por correo y contraseña
    cursor.execute(
        "SELECT id_usuario, nombre, correo FROM usuario WHERE correo = %s AND contraseña = %s",
        (datos["correo"], datos["contraseña"])
    )
    usuario = cursor.fetchone()
    cursor.close()
    conn.close()

    if usuario:
        return {"mensaje": "Autenticación satisfactoria.", "usuario": usuario}
    else:
        return {"error": "Error en la autenticación. Correo o contraseña incorrectos."}

# Endpoint GET - obtener todos los usuarios de MySQL
@app.get("/usuarios")
def get_usuarios():
    conn = get_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT id_usuario, nombre, correo, fecha_registro FROM usuario")
    usuarios = cursor.fetchall()
    cursor.close()
    conn.close()
    return usuarios