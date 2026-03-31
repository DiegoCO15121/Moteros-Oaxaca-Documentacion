# Flujo de Solicitud de Productos en el Sistema

## 1. Introducción

El presente documento describe de manera detallada el proceso que debe
seguir un usuario con el rol de vendedor para registrar una
solicitud de productos dentro del sistema web de Moteros Oaxaca. El
objetivo de esta guía es proporcionar instrucciones claras y precisas
que faciliten la operación diaria del sistema.

## 2. Flujo de Solicitud de Productos

A continuación, se describe paso a paso el proceso que debe seguir el
usuario vendedor para hacer una solicitud de forma exitosa en el
sistema.

### 2.1 Solicitud de Productos

**Paso 1: Identificación del producto a solicitar**

El usuario vendedor debe dirigirse a la sección "Productos". Una vez ahí
debe ubicar el producto del cual quiere solicitar. Una vez identificado
el producto, el usuario debe presionar en el kardex del producto.

![](/images/solicitud1.png)

Una vez dentro del kardex del producto el usuario puede filtrar los
movimientos que se han hecho relacionados al producto mediante los
filtros ubicados en la parte superior del sistema.

![](/images/solicitud2.png)

**Paso 2: Ejecución de la solicitud de productos**

Para generar una nueva solicitud de productos el usuario debe presionar
el botón "Nuevo" ubicado en la parte superior derecha. En el formulario
el usuario vendedor deberá seguir los siguientes pasos:

- Seleccionar como tipo de movimiento "Solicitud".

- Introducir la cantidad del producto a solicitar.

- Elegir la sucursal proveedora.

- Detallar el movimiento que se está haciendo.

- Ingresar código de vendedor.

- Presionar "Guardar".

![](/images/solicitud3.png)

Cuando el usuario presione el botón "Guardar", el estado de la solicitud
pasara a pendiente esperando la confirmación de la sucursal proveedora.

**Paso 3: Proceder con la solicitud (sucursal proveedora)**

En el sistema de la sucursal proveedora, se le notificara al usuario
vendedor que una sucursal le ha hecho una solicitud de producto (la
notificación también podrá ser vista desde la sección de notificaciones)

![](/images/solicitud4.png)

![](/images/solicitud5.png)

Para proceder se puede presionar en la notificación (en caso de usar el
acceso rápido ubicado en la parte superior derecha) o presionar el botón
de ojo de la notificación correspondiente dentro del dashboard.

**Paso 4: Detalles del Kardex de recibimiento de traspaso**

Al momento de presionar ver los detalles de la notificación el usuario
será redirigido al detalle del kardex de la solicitud y este tendrá la
posibilidad de subir evidencia sobre el envío del producto y también
detallar el movimiento.

![](/images/solicitud6.png)

![](/images/solicitud7.png)

**Paso 5.1: Flujo de rechazo de solicitud**

En caso de que el usuario presione el botón "Rechazar Solicitud". El
sistema mostrará un mensaje de confirmación.

![](/images/solicitud8.png)

En caso de que el usuario seleccione "Sí, solicitud rechazada", el
estado del solicitud aparecerá como rechazada y el stock del producto
solicitado no sufrirá alteraciones.

![](/images/solicitud9.png)

**Paso 5.2: Flujo de aceptación de la solicitud**

Cuando el usuario presione el botón de "Enviar", el estado del traspaso
pasa a ser enviado (sucursal proveedora).

![](/images/solicitud10.png)

En el sistema de la sucursal el Kardex se actualizará permitiendo al
usuario recibir o rechazar el pedido del producto. Para acceder al
Kardex se puede presionar en la notificación que se le hace llegar.

![](/images/solicitud11.png)

![](/images/solicitud12.png)

**Paso 5.2.1: Flujo de rechazo de envío**

En caso de que el usuario presione el botón "Rechazar". El sistema
mostrará un mensaje con múltiples opciones que el usuario vendedor
deberá elegir según sea el caso.

![](/images/solicitud13.png)

En caso de que el usuario seleccione "Devolver" o "No llegó", el estado
de la solicitud se actualizará como envío fallido y el stock del
producto restado será devuelto a su estado antes de hacer el envío.

![](/images/solicitud14.png)
![](/images/solicitud15.png)

**Paso 5.2.2: Flujo de aceptación de la solicitud**

Cuando el usuario presione el botón de "Recibido", el estado de la
solicitud pasa a ser finalizado tanto en sucursal proveedora como en
receptora.

Sucursal receptora.

![](/images/solicitud16.png)
![](/images/solicitud17.png)



  --------------------------------------------------------------------
  **Nota:** El stock del producto de la tienda que hizo la solicitud
  se le aumenta el producto llegado y la sucursal proveedora se le
  resta el producto enviado

  --------------------------------------------------------------------

## 3. Resumen del Proceso

A modo de referencia rápida, el flujo de solicitud en el sistema sigue
el siguiente orden:

1.  Seleccionar el producto a solicitar.

2.  Detallar la cantidad de producto a solicitar y la sucursal
    proveedora.

3.  Detallar el Kardex de solicitud del producto.

4.  En la sucursal proveedora, elegir si se rechaza o acepta la
    solicitud.

5.  En caso de que la sucursal proveedora acepte la solicitud, se envía
    el producto.

6.  La sucursal solicitante acepta o rechaza el producto.

7.  Comprobar el stock del producto de ambas tiendas.












