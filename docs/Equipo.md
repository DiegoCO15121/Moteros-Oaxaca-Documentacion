# Módulo de Equipo: Gestión de Equipo

## 1\. Introducción

El presente documento describe de manera detallada el proceso que debe seguir un usuario con el rol de Administrador para gestionar el equipo dentro del sistema web de Moteros Oaxaca. El módulo de Equipo permite registrar, actualizar y eliminar las cuentas de los colaboradores que operan como vendedores en las sucursales. Adicionalmente, permite configurar los permisos de acceso y las notificaciones que recibirá cada vendedor. Esta guía cubre cómo visualizar el listado del equipo, crear nuevos vendedores, editar sus datos y eliminar registros.

### 1.1 Rol Requerido

El módulo de Equipo es accesible únicamente para usuarios con el rol de Administrador. A continuación se describe el rol relevante:


## 2\. Gestión del Equipo

A continuación, se describe paso a paso cómo el Administrador puede gestionar el equipo del sistema: acceder al módulo, visualizar el listado, registrar nuevos vendedores, editarlos y eliminarlos.

### 2.1 Acceso al Módulo de Equipo

**Paso 1: Navegar al módulo**

El Administrador debe dirigirse al menú lateral (sidebar) del sistema y hacer clic en la opción "Equipo", ubicada dentro de la sección de Configuración. Al seleccionarla, el sistema redirige automáticamente al dashboard del módulo.

![](/images/equipo1.png)

### 2.2 Dashboard del Equipo

Una vez dentro del módulo, el Administrador puede ver el listado completo de vendedores registrados en el sistema. La tabla muestra los siguientes datos por cada colaborador: nombre completo, correo electrónico, sucursal asignada, estado de la cuenta (Activo o Inactivo), permisos asignados y fecha de creación del registro.

Desde este dashboard es posible realizar las siguientes acciones:

- Buscar vendedores mediante la barra de búsqueda en la parte superior.

- Filtrar el listado utilizando el botón "Filtros".

- Registrar un nuevo vendedor mediante el botón "Nuevo".

- Editar un registro existente o eliminarlo accediendo a las opciones de cada fila.

![](/images/equipo2.png)

### 2.3 Registrar un Nuevo Vendedor

**Paso 1: Abrir el formulario de nuevo vendedor**

Desde el dashboard, el Administrador debe hacer clic en el botón "Nuevo" ubicado en la esquina superior derecha. El sistema redirigirá al formulario de registro titulado "Nuevo Vendedor".

**Paso 2: Completar los datos del colaborador**

El formulario está organizado en tres secciones. La primera sección contiene los datos personales y de acceso del nuevo vendedor:

- Foto de perfil: (Opcional) Permite subir una imagen en formato \*.jpeg, \*.jpg o \*.png con un tamaño máximo de 3 MB.

- Estatus: Interruptor que permite activar o desactivar la cuenta del vendedor desde el momento del registro.

- Código: Campo que se genera automáticamente con el código del colaborador.

- Nombre\*: Campo obligatorio. Nombre del colaborador.

- Primer Apellido\*: Campo obligatorio. Primer apellido del colaborador.

- Segundo Apellido\*: Campo obligatorio. Segundo apellido del colaborador.

- Numero telefonico\*: Campo obligatorio. Numero de contacto del colaborador.

- Correo electronico\*: Campo obligatorio. Dirección de correo que utilizara el vendedor para iniciar sesion en el sistema.

- Sucursal: (Opcional) Permite asignar al vendedor a una sucursal especifica seleccionándola desde un menú desplegable.

**Paso 3: Configurar los permisos de acceso**

La segunda sección del formulario, "Permisos de acceso", permite definir a que módulos adicionales tendrá acceso el colaborador. Actualmente el permiso disponible es el siguiente:

- Auditoria de inventario: Permite al vendedor acceder al módulo de auditoría de inventario del sistema. Este permiso esta desactivado por defecto y es opcional.

**Paso 4: Configurar las notificaciones**

La tercera sección del formulario, "Notificaciones", permite definir que tipo de alertas recibira el colaborador dentro del sistema. Las notificaciones disponibles son las siguientes:

- Incidencias: Notificaciones relacionadas con incidencias del personal.

- Solicitudes de vacaciones: Alertas sobre solicitudes de periodos vacacionales.

- Permisos: Notificaciones sobre solicitudes de permisos del equipo.

- Ausencias: Alertas relacionadas con ausencias del personal.

![](/images/equipo3.png)

**Paso 5: Guardar el registro**

Una vez completados todos los campos requeridos y configurados los permisos y notificaciones, el Administrador debe hacer clic en el botón "Guardar" para registrar al nuevo vendedor en el sistema. Si desea cancelar la operación, puede presionar el botón "Regresar".

> Nota: Los campos marcados con (\*) son obligatorios. Si se intenta guardar sin completarlos, el sistema mostrará un mensaje de advertencia y no permitirá continuar. El correo electrónico ingresado será utilizado por el vendedor para acceder al sistema, por lo que debe ser valido y único.

### 2.4 Editar un Vendedor

**Paso 1: Seleccionar el vendedor a editar**

En el dashboard, el Administrador debe localizar al colaborador que desea modificar y acceder a las opciones de su registro. El sistema redirigirá al formulario de edición titulado "Editar vendedor", con todos los datos actuales precargados.

**Paso 2: Modificar los datos**

El Administrador puede modificar cualquiera de los campos disponibles: foto de perfil, estatus, datos personales, sucursal asignada, permisos de acceso y notificaciones. Todos los cambios se reflejan en tiempo real en el formulario antes de guardar.

**Paso 3: Guardar los cambios o usar acciones adicionales**

Una vez realizadas las modificaciones, el Administrador dispone de las siguientes opciones en la parte inferior del formulario:

- Guardar: Aplica los cambios realizados en el registro del vendedor.

- Reenviar Contraseña: Envía al correo electrónico del vendedor un mensaje para que pueda restablecer o recuperar su contraseña de acceso al sistema.

- Reenviar Código: Envía al vendedor el código de verificación o acceso al sistema.

- Regresar: Cancela la edición y vuelve al dashboard sin guardar cambios.

![](/images/equipo4.png)

> Nota: Las opciones "Reenviar Contraseña" y "Reenviar Código" son útiles cuando un vendedor ha olvidado sus credenciales de acceso o cuando se le incorpora como nuevo colaborador y requiere configurar su cuenta por primera vez.

### 2.5 Eliminar un Vendedor

**Paso 1: Acceder al registro a eliminar**

En el dashboard, el Administrador debe localizar al colaborador que desea eliminar y acceder a las opciones de su registro. El sistema redirigirá a la vista de eliminacion titulada "Eliminar vendedor", mostrando todos los datos del colaborador en modo de solo lectura.

**Paso 2: Confirmar la eliminacion**

En la parte inferior del formulario, el Administrador debe hacer clic en el botón "Eliminar" para proceder con la eliminación definitiva del registro. Si desea cancelar la operación, puede presionar el botón "Regresar".

![](/images/equipo5.png)

> Nota: La eliminación de un vendedor es una acción permanente e irreversible. Una vez confirmada, el colaborador perderá acceso inmediato al sistema. Se recomienda verificar que el vendedor no tenga operaciones activas o pendientes antes de proceder con su eliminación.

## 3\. Resumen del Proceso

A modo de referencia rápida, las acciones disponibles en el módulo de Equipo siguen el siguiente flujo:

- Acceder al módulo desde la opción "Equipo" en la sección de configuración del sidebar.

- Visualizar el listado de vendedores en el dashboard, utilizando los filtros y la búsqueda si es necesario.

- Registrar un nuevo vendedor con el botón "Nuevo": completar datos personales, configurar permisos de acceso y notificaciones, y guardar.

- Editar un vendedor, modificar sus datos y utilizar las opciones de "Reenviar Contraseña" o "Reenviar Codigo" si es necesario.

- Eliminar un vendedor accediendo a su registro y confirmando la acción con el botón "Eliminar".
