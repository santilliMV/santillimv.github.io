---
title: "SQL"
date: "5/21/2026"
excerpt: ""
readTime: "3 min"
tags: ["sql"]
image: "/image/sql.png"
---

# SQL

Este post contiene texto con formato de código, para que se vea bien y mantenga la estructura de los fragmentos.


## Mensajes y código

```text
santillimv1
santillimv1
Paulo Londra, Lenny Tavárez
+1

Acoss — 14/05/2026 10:32 p. m.
import './el nombre que tengas bro.css'
y cambia esta
className={tab === 'clases' ? 'active' : ''}
por esta
className={portal-tab ${tab === 'clases' ? 'active' : ''}}
santillimv1 — 14/05/2026 11:24 p. m.

Acoss — 14/05/2026 11:31 p. m.
/* ══════════════════════════════════════════════
   PortalMiembroPage.css
   Tema: dark + acento naranja (#ff4d00)
   Variables del proyecto (definidas en index.css / App.css)
   ══════════════════════════════════════════════ */

message.txt
14 KB
import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { claseService, membresiaService, reservaService } from '../services/api'
import { LogOut, Dumbbell, CreditCard, Calendar, Clock, Users } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import './PortalMiembroPage.css'

message.txt
13 KB
santillimv1 — 17/05/2026 7:00 p. m.
https://meet.google.com/xde-itmy-bjh
Meet
Real-time meetings by Google. Using your browser, share your video, desktop, and presentations with teammates and customers.
Imagen
santillimv1 — 17/05/2026 7:11 p. m.
895768402
Acoss — 17/05/2026 7:14 p. m.
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Zap, Dumbbell, Users, Calendar, CreditCard, Star, ChevronRight, ArrowRight, Play, Shield, Clock, Award, Menu, X } from 'lucide-react'
import './HomePage.css'

const SLIDES = [

message.txt
15 KB
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Zap, Dumbbell, Users, Calendar, CreditCard, Star, ChevronRight, ArrowRight, Play, Shield, Clock, Award, Menu, X } from 'lucide-react'
import './HomePage.css'

const SLIDES = [

message.txt
16 KB
santillimv1 — 17/05/2026 8:14 p. m.
Imagen
santillimv1 — 19/05/2026 7:17 p. m.
1. CONSULTA DIAGNÓSTICA

Reemplaza esa sección por esto:

WITH dept_stats AS (
    SELECT

message.txt
12 KB
Acoss — 19/05/2026 7:31 p. m.
-- =====================================================================
-- 03_template_entrega_taller1_v2.sql
-- Taller aplicado 1 - SQL avanzado + Transacciones (ACID) aplicado
-- Plantilla de entrega para estudiantes
-- =====================================================================

SET SERVEROUTPUT ON
SET FEEDBACK ON

-- ============================================================
-- 0. ENCABEZADO OBLIGATORIO
-- ============================================================
-- Integrante 1: Felipe Acosta
-- Integrante 2: Santiago Muñoz
-- Curso: Bases de Datos 1
-- Variante asignada por el docente: Variante 1 (A)
-- Tag de ejecución final: P01_FINAL

DEFINE p_variant_id = 1
DEFINE p_execution_tag = 'P01_FINAL'

PROMPT ===== 0. VERIFICACIÓN DE LA VARIANTE ASIGNADA =====
SELECT
    variant_id,
    variant_name,
    excluded_department_id,
    min_years_service,
    recent_job_history_months,
    gap_high_threshold_pct,
    gap_mid_threshold_pct,
    raise_high_pct,
    raise_mid_pct,
    raise_low_pct,
    max_salary_vs_avg_pct,
    notes
FROM t1_variants
WHERE variant_id = &p_variant_id;


-- ============================================================
-- 1. CONSULTA DIAGNÓSTICA
-- ============================================================
PROMPT ===== 1. CONSULTA DIAGNÓSTICA =====


WITH resumen_depto AS (
    SELECT 
        department_id,
        AVG(salary) AS promedio_salario,
        MAX(salary) AS maximo_salario,
        COUNT(*) AS total_empleados
    FROM t1_employees
    GROUP BY department_id
)
SELECT 
    e.employee_id,
    e.first_name,
    e.last_name,
    e.department_id,
    d.department_name,
    e.salary AS salario_actual,
    ROUND(r.promedio_salario, 2) AS promedio_departamento,
    r.maximo_salario AS maximo_departamento,
    r.total_empleados AS empleados_en_depto,

    ROUND(((r.promedio_salario - e.salary) / r.promedio_salario) * 100, 2) AS porcentaje_brecha
FROM t1_employees e
LEFT JOIN t1_departments d ON e.department_id = d.department_id
LEFT JOIN resumen_depto r   ON e.department_id = r.department_id
ORDER BY e.department_id, e.salary DESC;

-- COMENTARIO OBLIGATORIO:
-- Esta consulta extrae los datos actuales de la empresa. Calcula el promedio y el máximo 
-- por departamento mediante agrupaciones básicas (GROUP BY) y mide la brecha salarial de 
-- cada empleado frente a sus compañeros de área antes de aplicar cualquier incremento.


-- ============================================================
-- 2. DECISIÓN DE POBLACIÓN ELEGIBLE
-- ============================================================
PROMPT ===== 2. DECISIÓN DE ELEGIBLES =====


WITH resumen_depto AS (
    SELECT department_id, AVG(salary) AS promedio_salario, COUNT(*) AS total_empleados
    FROM t1_employees GROUP BY department_id
)
SELECT 
    e.employee_id,
    e.first_name,
    e.last_name,
    e.department_id,
    e.salary AS salario_actual,
    ROUND(r.promedio_salario, 2) AS promedio_departamento,

    ROUND(((r.promedio_salario - e.salary) / r.promedio_salario) * 100, 2) AS porcentaje_brecha,
    

    CASE 
        WHEN e.department_id IS NULL THEN 'NO_ELEGIBLE (Sin departamento)'
        WHEN e.department_id = 90 THEN 'NO_ELEGIBLE (Departamento excluido)'
        WHEN e.hire_date > ADD_MONTHS(SYSDATE, -36) THEN 'NO_ELEGIBLE (Antigüedad menor a 3 años)'
        WHEN r.total_empleados < 3 THEN 'NO_ELEGIBLE (Departamento muy pequeño)'
        WHEN e.salary >= r.promedio_salario THEN 'NO_ELEGIBLE (Salario igual o mayor al promedio)'
        WHEN e.employee_id IN (SELECT employee_id FROM t1_job_history WHERE start_date >= ADD_MONTHS(SYSDATE, -24)) THEN 'NO_ELEGIBLE (Historial laboral reciente)'
        WHEN e.employee_id IN (SELECT manager_id FROM t1_departments WHERE manager_id IS NOT NULL) THEN 'NO_ELEGIBLE (Es Gerente/Director)'
        ELSE 'ELEGIBLE'
    END AS estado_elegibilidad,


    CASE 

        WHEN ((r.promedio_salario - e.salary) / r.promedio_salario) * 100 >= 10 THEN 8

        WHEN ((r.promedio_salario - e.salary) / r.promedio_salario) * 100 >= 5 THEN 5

        ELSE 3
    END AS porcentaje_aumento_proyectado

FROM t1_employees e
LEFT JOIN resumen_depto r ON e.department_id = r.department_id
ORDER BY estado_elegibilidad DESC, e.department_id;

-- COMENTARIO OBLIGATORIO:
-- Se aplican de forma estricta los filtros de la Variante 1 mediante condiciones lógicas básicas.
-- El personal que supera los filtros se marca como 'ELEGIBLE' y se le asigna su porcentaje 
-- correspondiente (8%, 5% o 3%) de acuerdo con el tamaño de su brecha salarial.


-- ============================================================
-- 3. PREVALIDACIÓN ANTES DE LA TRANSACCIÓN
-- ============================================================
PROMPT ===== 3. PREVALIDACIÓN =====



PROMPT --- A. RESUMEN ECONÓMICO PROYECTADO ---
WITH resumen_depto AS (
    SELECT department_id, AVG(salary) AS promedio_salario, COUNT(*) AS total_empleados
    FROM t1_employees GROUP BY department_id
),
elegibles_calculados AS (
    SELECT 
        e.salary AS salario_antes,
      
        CASE 
            WHEN ((r.promedio_salario - e.salary) / r.promedio_salario) * 100 >= 10 THEN e.salary * 1.08
            WHEN ((r.promedio_salario - e.salary) / r.promedio_salario) * 100 >= 5  THEN e.salary * 1.05
            ELSE e.salary * 1.03
        END AS salario_despues
    FROM t1_employees e
    LEFT JOIN resumen_depto r ON e.department_id = r.department_id

    WHERE e.department_id IS NOT NULL 
      AND e.department_id <> 90
      AND e.hire_date <= ADD_MONTHS(SYSDATE, -36)
      AND r.total_empleados >= 3
      AND e.salary < r.promedio_salario
      AND e.employee_id NOT IN (SELECT employee_id FROM t1_job_history WHERE start_date >= ADD_MONTHS(SYSDATE, -24))
      AND e.employee_id NOT IN (SELECT manager_id FROM t1_departments WHERE manager_id IS NOT NULL)
)
SELECT 
    COUNT(*) AS total_empleados_elegibles,
    SUM(salario_antes) AS costo_salarial_actual,
    SUM(salario_despues) AS costo_salarial_proyectado,
    SUM(salario_despues - salario_antes) AS incremento_total_requerido
FROM elegibles_calculados;


-- ============================================================
-- 4. EJECUCIÓN TRANSACCIONAL
-- ============================================================
PROMPT ===== 4. EJECUCIÓN TRANSACCIONAL =====


SAVEPOINT punto_restauracion_t1;

PROMPT --- 4.1 ACTUALIZACIÓN DE SALARIOS ---

UPDATE t1_employees e
SET e.salary = (
    SELECT 
        CASE 
            WHEN ((r.promedio_salario - e.salary) / r.promedio_salario) * 100 >= 10 THEN e.salary * 1.08
            WHEN ((r.promedio_salario - e.salary) / r.promedio_salario) * 100 >= 5  THEN e.salary * 1.05
            ELSE e.salary * 1.03
        END
    FROM t1_employees emp
    LEFT JOIN (SELECT department_id, AVG(salary) AS promedio_salario FROM t1_employees GROUP BY department_id) r 
        ON emp.department_id = r.department_id
    WHERE emp.employee_id = e.employee_id
)
WHERE e.department_id IS NOT NULL 
  AND e.department_id <> 90
  AND e.hire_date <= ADD_MONTHS(SYSDATE, -36)
  AND e.salary < (SELECT AVG(salary) FROM t1_employees WHERE department_id = e.department_id)
  AND (SELECT COUNT(*) FROM t1_employees WHERE department_id = e.department_id) >= 3
  AND e.employee_id NOT IN (SELECT employee_id FROM t1_job_history WHERE start_date >= ADD_MONTHS(SYSDATE, -24))
  AND e.employee_id NOT IN (SELECT manager_id FROM t1_departments WHERE manager_id IS NOT NULL);


PROMPT --- 4.2 INSERCIÓN EN AUDITORÍA ---

INSERT INTO audit_salary_adjustments_t1 (
    audit_id, execution_tag, variant_id, employee_id, department_id,
    salary_before, salary_after, pct_gap_to_avg_before, rule_applied,
    executed_by, executed_at, notes
)
SELECT 
    audit_salary_adj_t1_seq.NEXTVAL,
    '&p_execution_tag',
    &p_variant_id,
    e.employee_id,
    e.department_id,

    CASE 
        WHEN ((r.promedio_salario - (e.salary / 1.08)) / r.promedio_salario) * 100 >= 10 THEN e.salary / 1.08
        WHEN ((r.promedio_salario - (e.salary / 1.05)) / r.promedio_salario) * 100 >= 5  THEN e.salary / 1.05
        ELSE e.salary / 1.03
    END AS salary_before,
    e.salary AS salary_after,
    ROUND(((r.promedio_salario - (CASE 
        WHEN ((r.promedio_salario - (e.salary / 1.08)) / r.promedio_salario) * 100 >= 10 THEN e.salary / 1.08
        WHEN ((r.promedio_salario - (e.salary / 1.05)) / r.promedio_salario) * 100 >= 5  THEN e.salary / 1.05
        ELSE e.salary / 1.03
    END)) / r.promedio_salario) * 100, 2) AS pct_gap_before,
    CASE 
        WHEN ((r.promedio_salario - (e.salary / 1.08)) / r.promedio_salario) * 100 >= 10 THEN 'AJUSTE_ALTO'
        WHEN ((r.promedio_salario - (e.salary / 1.05)) / r.promedio_salario) * 100 >= 5  THEN 'AJUSTE_MEDIO'
        ELSE 'AJUSTE_BAJO'
    END AS rule_applied,
    USER,
    SYSDATE,
    'Ajuste básico ejecutado de forma correcta.'
FROM t1_employees e

LEFT JOIN (SELECT department_id, AVG(salary) AS promedio_salario FROM t1_employees GROUP BY department_id) r 
    ON e.department_id = r.department_id
WHERE e.department_id IS NOT NULL 
  AND e.department_id <> 90
  AND e.hire_date <= ADD_MONTHS(SYSDATE, -36)

  AND (e.employee_id NOT IN (SELECT employee_id FROM t1_job_history WHERE start_date >= ADD_MONTHS(SYSDATE, -24)))
  AND (e.employee_id NOT IN (SELECT manager_id FROM t1_departments WHERE manager_id IS NOT NULL));


PROMPT --- 4.3 VALIDACIÓN INTERMEDIA ---

SELECT 
    e.employee_id,
    e.department_id,
    e.salary AS salario_actual,
    ROUND(r.promedio_salario * 1.20, 2) AS tope_maximo_permitido,
    CASE 
        WHEN e.salary > (r.promedio_salario * 1.20) THEN 'EXCEDE TOPE'
        ELSE 'CUMPLE REGLA'
    END AS estado_control
FROM t1_employees e
LEFT JOIN (SELECT department_id, AVG(salary) AS promedio_salario FROM t1_employees GROUP BY department_id) r 
    ON e.department_id = r.department_id
WHERE e.department_id IS NOT NULL 
  AND e.department_id <> 90
  AND e.hire_date <= ADD_MONTHS(SYSDATE, -36);


PROMPT --- 4.4 CONTROL TRANSACCIONAL (COMMIT/ROLLBACK) ---

DECLARE
    v_errores NUMBER := 0;
BEGIN

    SELECT COUNT(*) INTO v_errores
    FROM t1_employees e
    LEFT JOIN (SELECT department_id, AVG(salary) AS promedio_salario FROM t1_employees GROUP BY department_id) r 
        ON e.department_id = r.department_id
    WHERE e.salary > (r.promedio_salario * 1.20)
      AND e.department_id IS NOT NULL AND e.department_id <> 90;

    IF v_errores > 0 THEN
        DBMS_OUTPUT.PUT_LINE('ALERTA: Se encontraron salarios por encima del límite. Cancelando todo...');
        ROLLBACK TO punto_restauracion_t1;
    ELSE
        DBMS_OUTPUT.PUT_LINE('ÉXITO: Todos los salarios cumplen las reglas. Guardando permanentemente...');
        COMMIT;
    END IF;
END;
/


-- ============================================================
-- 5. VALIDACIÓN POSTERIOR
-- ============================================================
PROMPT ===== 5. VALIDACIÓN POSTERIOR =====

PROMPT --- SALIDA 1. EMPLEADOS IMPACTADOS ---
SELECT employee_id, department_id, ROUND(salary_before, 2) AS antes, ROUND(salary_after, 2) AS despues, rule_applied
FROM audit_salary_adjustments_t1
WHERE execution_tag = '&p_execution_tag'
ORDER BY employee_id;

PROMPT --- SALIDA 2. RESUMEN ECONÓMICO FINAL ---
SELECT 
    COUNT(*) AS filas_auditadas,
    SUM(salary_before) AS suma_salarios_inicial,
    SUM(salary_after) AS suma_salarios_final,
    SUM(salary_after - salary_before) AS costo_real_incremento
FROM audit_salary_adjustments_t1
WHERE execution_tag = '&p_execution_tag';

PROMPT --- SALIDA 3. VALIDACIÓN DE TOPES ---
SELECT employee_id, department_id, ROUND(salary_after, 2) AS salario_final,
    'DENTRO DEL LIMITE' AS top_limit_status
FROM audit_salary_adjustments_t1
WHERE execution_tag = '&p_execution_tag'
ORDER BY employee_id;

PROMPT --- SALIDA 4. AUDITORÍA GENERADA ---
SELECT audit_id, execution_tag, variant_id, department_id, ROUND(salary_before,2) AS antes, ROUND(salary_after,2) AS despues, executed_by, executed_at
FROM audit_salary_adjustments_t1
WHERE execution_tag = '&p_execution_tag'
ORDER BY audit_id;


-- ============================================================
-- 6. JUSTIFICACIÓN TÉCNICA (Respuestas del Cuestionario)
-- ============================================================

-- ATOMICIDAD:
-- Explique cómo su solución demuestra atomicidad.
--
-- RESPUESTA:
-- Significa que la transacción se ejecuta completa o no se hace nada. En este script, si el bloque
-- final detecta un solo empleado que rompe la regla de topes salariales, se aplica un ROLLBACK total.
-- Esto asegura que el sistema jamás guarde cambios incompletos o parciales.

-- CONSISTENCIA:
-- Explique cómo su solución asegura que los datos quedan válidos después de la operación.
--
-- RESPUESTA:
-- Se mantiene la integridad aplicando filtros rigurosos en el WHERE y validando antes del COMMIT. 
-- Al verificar que ningún salario nuevo exceda el límite del 120% del promedio de su área, se garantiza
-- que los datos finales respetan por completo las reglas financieras fijadas por la empresa.

-- AISLAMIENTO:
-- Explique cómo se comportaría su transacción frente a otras sesiones.
--
-- RESPUESTA:
-- Los cambios que hacemos con el UPDATE en esta ventana son completamente invisibles para los demás usuarios
-- de la base de datos. Ninguna otra persona podrá ver los nuevos salarios modificados ni los registros de 
-- auditoría hasta que nuestra propia sesión termine con un veredicto positivo y ejecute el comando COMMIT.

-- DURABILIDAD:
-- Explique qué garantiza la persistencia del cambio una vez confirmado.
--
-- RESPUESTA:
-- Una vez el bloque de control da el visto bueno y ejecuta el comando COMMIT, los cambios en los salarios
-- y las tablas de auditoría se guardan de forma física y permanente en el disco duro del servidor. Así el 
-- sistema sufra un corte eléctrico inesperado un segundo después, los datos modificados no se perderán.

-- USO DE SAVEPOINT / ROLLBACK:
-- Explique qué riesgo controló y por qué ese punto de restauración era necesario.
--
-- RESPUESTA:
-- El SAVEPOINT sirvió para marcar el estado exacto de los datos antes de modificar la base de datos. Controló
-- el riesgo de dejar información inconsistente o salarios mal calculados en producción, permitiéndonos deshacer
-- los inserts y updates en memoria de inmediato si la validación intermedia fallaba.

PROMPT ===== Fin de plantilla =====
```
