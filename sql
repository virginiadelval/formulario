CREATE TABLE Mobiliario (
    id SERIAL PRIMARY KEY,
    tipo VARCHAR(255),
    cantidad INT,
    estado VARCHAR(50)
);

CREATE TABLE Ubicacion (
    id SERIAL PRIMARY KEY,
    latitud DECIMAL(10, 6),
    longitud DECIMAL(10, 6),
    mobiliario_id INT,
    FOREIGN KEY (mobiliario_id) REFERENCES Mobiliario(id)
);
