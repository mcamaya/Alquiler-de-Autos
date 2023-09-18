# Alquiler de Autos

## API Reference


#### 2. Mostrar todos los clientes registrados en la base de datos.
```http
GET /api/v1/clientes
```

#### 3. Obtener todos los automóviles disponibles para alquiler.
```http
GET /api/v1/autos
```

#### 7. Listar los empleados con el cargo de "Vendedor".
```http
GET /api/v1/empleados/vendedores
```

#### 10. Listar los clientes con el DNI específico.
```http
GET /api/v1/clientes/docs/${documento_cliente}
```

#### 11. Mostrar todos los automóviles con una capacidad mayor a 5 personas.
```http
GET /api/v1/autos/capacidad-mayor-que-5
```

#### 14. Mostrar los empleados con cargo de "Gerente" o "Asistente".
```http
GET /api/v1/empleados/gerentes_asistentes
```

#### 16. Listar todos los automóviles ordenados por marca y modelo.
```http
GET /api/v1/autos/ordenados
```
