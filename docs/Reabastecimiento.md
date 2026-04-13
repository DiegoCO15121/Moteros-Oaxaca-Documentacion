# Módulo de Reabastecimiento en el Sistema

## 1. Introducción

El presente documento describe de manera detallada el uso del módulo de
Reabastecimiento dentro del sistema web de Moteros Oaxaca. Este módulo
permite al Administrador consultar el reporte de ventas de los
productos, clasificarlos por su desempeño comercial y ajustar sus
precios de costo y venta directamente desde el sistema. Adicionalmente,
ofrece la posibilidad de exportar la información a un archivo de Excel
para su análisis externo.

### 1.1 Rol Requerido

El módulo de Reabastecimiento es accesible únicamente para usuarios con
el rol de Administrador. A continuación, se describe el rol relevante:

  --------------------- -------------------------------------------------
  **Rol**               **Permisos y Funciones**

  **Administrador**     Tiene acceso exclusivo al módulo de
                        Reabastecimiento. Puede consultar el reporte de
                        ventas, aplicar filtros por fecha y sucursal,
                        ajustar precios de costo y venta de los
                        productos, y exportar la información a Excel.
  --------------------- -------------------------------------------------

## 2. Uso del Módulo de Reabastecimiento

A continuación, se describe paso a paso cómo el Administrador puede
utilizar el módulo de Reabastecimiento: acceder al dashboard, consultar
el reporte de ventas, aplicar filtros, ajustar precios y exportar la
información.

### 2.1 Acceso al Módulo de Reabastecimiento

**Paso 1: Navegar al módulo**

El Administrador debe dirigirse al menú lateral (sidebar) del sistema y
hacer clic en la opción \"Reabastecimiento\". Al seleccionarla, el
sistema redirige automáticamente al dashboard del módulo, donde se
muestra el Reporte de Ventas.

![](/images/reabastecimientos1.png)

### 2.2 Dashboard: Reporte de Ventas

El dashboard del módulo de Reabastecimiento presenta un reporte de
ventas detallado de los productos. La información se organiza en tres
clasificaciones, disponibles como pestañas en la parte superior de la
tabla:

- Productos más vendidos: Muestra los productos ordenados de mayor a
  menor cantidad de unidades vendidas en el período seleccionado.

- Sin ganancia: Muestra los productos cuyo margen de ganancia es nulo o
  muy bajo, lo que permite al Administrador identificar artículos que
  requieren un ajuste de precio.

- Alta ganancia: Muestra los productos con el mayor porcentaje de
  ganancia, útiles para identificar los artículos más rentables de la
  tienda.

Para cada producto, la tabla presenta las siguientes columnas: Código,
Producto, Vendidos, Stock, Costo, Precio de Venta, Ganancia y Ganancia
%.

![](/images/reabastecimientos2.png)

### 2.3 Aplicar Filtros al Reporte

El Administrador puede acotar los resultados del reporte utilizando los
filtros disponibles en la parte superior del dashboard. Los filtros
disponibles son los siguientes:

- Fecha de inicio: Permite establecer la fecha inicial del período de
  ventas a consultar.

- Fecha de fin: Permite establecer la fecha final del período de ventas
  a consultar.

- Sucursal: Permite filtrar los resultados por una sucursal específica o
  visualizar los datos de todas las sucursales simultáneamente.

**Aplicar los filtros**

Una vez configurados los parámetros deseados, el Administrador debe
hacer clic en el botón \"Aplicar Filtros\". La tabla se actualizará
automáticamente mostrando únicamente los productos que correspondan al
rango de fechas y la sucursal seleccionados.

### 2.4 Ajustar el Precio de un Producto

Desde el reporte de ventas, el Administrador puede modificar el precio
de costo o el precio de venta de cualquier producto directamente, sin
necesidad de salir del módulo.

**Paso 1: Seleccionar el campo a editar**

El Administrador debe localizar el producto que desea modificar dentro
de la tabla y hacer clic sobre el valor que desea editar: el Costo o el
Precio de Venta del producto. Al hacer clic sobre cualquiera de estos
valores, el sistema abrirá una ventana emergente de \"Ajustar precios\".

**Paso 2: Modificar los valores en el formulario**

La ventana emergente muestra los datos actuales del producto y permite
al Administrador actualizar los siguientes campos:

- Precio de compra: El costo al que la tienda adquiere el producto.

- Precio de venta: El precio al que se vende el producto al cliente.

El sistema calcula automáticamente la Ganancia y el Porcentaje de
Ganancia (Ganancia %) en tiempo real conforme el Administrador modifica
los valores, lo que facilita la toma de decisiones sobre los precios.

![](/images/reabastecimientos3.png)

**Paso 3: Confirmar el ajuste**

Una vez ingresados los nuevos valores, el Administrador debe hacer clic
en el botón \"Ajustar precio\" para guardar los cambios en el sistema.
Si desea cancelar la operación sin guardar, puede presionar el botón
\"Cancelar\" o la \"X\" en la esquina superior derecha de la ventana
emergente.

  -----------------------------------------------------------------------
  **Nota:** Los cambios en el precio de costo y en el precio de venta se
  aplican de forma inmediata en el sistema y se reflejarán en futuras
  ventas y reportes.

  -----------------------------------------------------------------------

### 2.5 Exportar el Reporte a Excel

El Administrador puede exportar el reporte de ventas actualmente visible
en pantalla a un archivo de Excel para su análisis externo o respaldo.
Para ello, debe hacer clic en el botón \"Exportar Excel\" ubicado en la
esquina superior derecha del dashboard.

El sistema generará y descargará automáticamente un archivo con la
información de los productos mostrados en el reporte, incluyendo los
filtros y la clasificación aplicados en ese momento.

## 3. Resumen del Proceso

A modo de referencia rápida, el flujo de uso del módulo de
Reabastecimiento sigue el siguiente orden:

- Acceder al módulo desde la opción \"Reabastecimiento\" en el sidebar.

- Seleccionar la clasificación deseada en las pestañas: Productos más
  vendidos, Sin ganancia o Alta ganancia.

- Aplicar filtros por fecha de inicio, fecha de fin y/o sucursal, y
  hacer clic en \"Aplicar Filtros\".

- Para ajustar el precio de un producto, hacer clic sobre el valor de
  Costo o Precio de Venta del producto en la tabla.

- Modificar los valores en la ventana emergente y confirmar con
  \"Ajustar precio\".

- Para exportar el reporte, hacer clic en \"Exportar Excel\" con los
  filtros y clasificación deseados activos.












