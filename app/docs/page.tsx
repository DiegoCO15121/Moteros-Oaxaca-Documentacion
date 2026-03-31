export default function HomePage() {
  return (
    <div className="prose prose-slate max-w-4xl mx-auto p-8">
      <h1>Bienvenido al Manual de Usuario</h1>
      <p>
        Este manual está diseñado para guiarte a través de todas las funcionalidades
        disponibles en el sistema de Moteros Oaxaca. Aquí encontrarás documentación
        detallada sobre cada módulo, incluyendo instrucciones paso a paso,
        capturas de pantalla y consejos útiles.
      </p>
      <h2>¿Qué encontrarás aquí?</h2>
      <ul>
        <li><strong>Clientes:</strong> Gestión completa de clientes, incluyendo creación, edición y eliminación.</li>
        <li><strong>Cotizaciones:</strong> Creación y gestión de cotizaciones para ventas.</li>
        <li><strong>Cotizaciones en Línea:</strong> Manejo de cotizaciones realizadas a través de la plataforma en línea.</li>
        <li><strong>Apertura de Caja:</strong> Procedimientos para iniciar el día de ventas.</li>
        <li><strong>Devoluciones:</strong> Gestión de devoluciones de productos.</li>
        <li><strong>Solicitud de Producto:</strong> Cómo solicitar nuevos productos al inventario.</li>
        <li><strong>Traspasos:</strong> Transferencias de productos entre sucursales.</li>
        <li>Y mucho más...</li>
      </ul>
      <p>
        Navega por el menú lateral para acceder a la documentación específica
        de cada módulo. Si tienes alguna pregunta o necesitas ayuda adicional,
        no dudes en contactar al equipo de soporte.
      </p>
    </div>
  );
}