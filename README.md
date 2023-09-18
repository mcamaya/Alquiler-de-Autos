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

#### 4. Listar todos los alquileres activos junto con los datos de los clientes relacionados.
```http
GET /api/v1/alquileres/activos
```

#### 5. Mostrar todas las reservas pendientes con los datos del cliente y el automóvil reservado.
```http
GET /api/v1/alquileres/pendientes
```

#### 6. Obtener los detalles del alquiler con el ID_Alquiler específico.
```http
GET /api/v1/alquileres/${id_alquiler}
```

#### 7. Listar los empleados con el cargo de "Vendedor".
```http
GET /api/v1/empleados/vendedores
```

#### 8. Mostrar la cantidad total de automóviles disponibles en cada sucursal.
```http
GET /api/v1/sucursales
```

#### 9. Obtener el costo total de un alquiler específico.
```http
GET /api/v1/alquileres/calcular-precio?auto=${automovil_oId}&horas=${numero_horas}&dias=${numero_dias}
```

#### 10. Listar los clientes con el DNI específico.
```http
GET /api/v1/clientes/docs/${documento_cliente}
```

#### 11. Mostrar todos los automóviles con una capacidad mayor a 5 personas.
```http
GET /api/v1/autos/capacidad-mayor-que-5
```

#### 12. Obtener los detalles del alquiler que tiene fecha de inicio en '2023-07-05'.
```http
GET /api/v1/alquileres/julio-05
```

#### 13. Listar las reservas pendientes realizadas por un cliente específico.
```http
GET /api/v1/alquileres/pendientes/${oId_cliente}
```

#### 14. Mostrar los empleados con cargo de "Gerente" o "Asistente".
```http
GET /api/v1/empleados/gerentes_asistentes
```

#### 15.Obtener los datos de los clientes que realizaron almenos un alquiler.
```http
GET /api/v1/clientes/han-reservado
```

#### 16. Listar todos los automóviles ordenados por marca y modelo.
```http
GET /api/v1/autos/ordenados
```

#### 17. Mostrar la cantidad total de automóviles en cada sucursal junto con su dirección.
```http
GET /api/v1/sucursales
```

#### 18. Obtener la cantidad total de alquileres registrados en la base de datos.
```http
GET /api/v1/alquileres
```

#### 19. Mostrar los automóviles con capacidad igual a 5 personas y que estén disponibles.
```http
GET /api/v1/autos/capacidad-mayor-que-5
```

#### 21. Listar los alquileres con fecha de inicio entre '2023-07-05' y '2023-07-10'.
```http
GET /api/v1/alquileres/julio-05-10
```
