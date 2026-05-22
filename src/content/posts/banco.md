---
title: "Modelado de Sistema Bancario"
date: "2/18/2026"
excerpt: "Descripción del contexto, atributos, llaves y reducción a tablas del sistema de información bancario"
readTime: ""
tags: ["modelado"]
image: "/image/Solucion.png"
---

# Modelado de Sistema Bancario

El sistema representa la estructura de información de una entidad bancaria. En él se registran los clientes que acceden a productos financieros, los empleados que operan dentro de la organización, las sucursales donde se prestan los servicios, las cuentas que poseen los clientes, los préstamos que solicitan y los pagos que realizan sobre dichos préstamos.

## Entidades, Atributos y Llaves

- **Sucursal**: almacena el nombre (PK), ciudad y activo de cada sede bancaria.
- **Cliente**: identificado por un id (PK), con atributos de nombre, calle y ciudad.
- **Empleado**: identificado por un id (PK), con nombre, teléfono, fecha de comienzo, nombre del subordinado y antigüedad (derivada de la fecha de comienzo). Tiene una FK hacia Sucursal.
- **Préstamo**: identificado por número (PK) e importe. Tiene FK hacia Sucursal (donde se otorga) y FK hacia Cliente.
- **Pago**: identificado por número (PK), con fecha e importe. Tiene FK hacia Préstamo.
- **Cuenta**: identificada por número (PK) y saldo. Tiene FK hacia Cliente.
- **Cuenta de Ahorro**: especialización de Cuenta, agrega tipo de interés.
- **Cuenta Corriente**: especialización de Cuenta, agrega descubierto.

## Reducción a Tablas

- **Sucursal** (NombreSucursal, Ciudad, Activo)
- **Cliente** (IdCliente, Nombre, Calle, Ciudad)
- **Empleado** (IdEmpleado, Nombre, Teléfono, FechaComienzo, NombreSubordinado, Antigüedad, NombreSucursal*)
- **Préstamo** (NúmeroPréstamo, Importe, NombreSucursal*, IdCliente*)
- **Pago** (NúmeroPago, Fecha, Importe, NúmeroPréstamo*)
- **Cuenta** (NúmeroCuenta, Saldo, IdCliente*)
- **CuentaAhorro** (NúmeroCuenta*, TipoInterés)
- **CuentaCorriente** (NúmeroCuenta*, Descubierto)
