import './index.css';
import React, { useState } from 'react';

const FaresComponent = () => {
  // Datos estáticos de tarifas
  const faresData = [
    {image: require('./imagenes/paris.jpg'), origin: 'Londres', destination: 'París', departureDate: '2024-02-01', returnDate: '2024-02-05', price: 200 },
    {image: require('./imagenes/mexico.jpg'),origin: 'Miami', destination: 'Mexico', departureDate: '2024-02-01', returnDate: '2024-02-05', price: 200 },
    {image: require('./imagenes/roma.jpg'),origin: 'Miami', destination: 'Roma', departureDate: '2024-02-01', returnDate: '2024-02-05', price: 200 },
    {image: require('./imagenes/madrid.jpg'),origin: 'Roma', destination: 'Madrid', departureDate: '2024-02-01', returnDate: '2024-02-05', price: 200 },
    {image: require('./imagenes/habana.jpg'),origin: 'Roma', destination: 'Habana', departureDate: '2024-02-01', returnDate: '2024-02-05', price: 200 },
    {image: require('./imagenes/bracilia.jpg'),origin: 'Roma', destination: 'Bracilia', departureDate: '2024-02-01', returnDate: '2024-02-05', price: 200 },
    {image: require('./imagenes/londres.jpg'),origin: 'Roma', destination: 'Londres', departureDate: '2024-02-01', returnDate: '2024-02-05', price: 200 },
    {image: require('./imagenes/miami.jpg'),origin: 'Roma', destination: 'Miami', departureDate: '2024-02-01', returnDate: '2024-02-05', price: 200 },
    {image: require('./imagenes/miami.jpg'),origin: 'Roma', destination: 'Miami', departureDate: '2024-02-01', returnDate: '2024-02-05', price: 200 },
    {image: require('./imagenes/miami.jpg'),origin: 'Cuba', destination: 'Miami', departureDate: '2024-02-01', returnDate: '2024-02-05', price: 200 },
    {image: require('./imagenes/paris.jpg'), origin: 'Londres', destination: 'París', departureDate: '2024-02-01', returnDate: '2024-02-05', price: 200 },
    {image: require('./imagenes/mexico.jpg'),origin: 'Miami', destination: 'Mexico', departureDate: '2024-02-01', returnDate: '2024-02-05', price: 200 },
    {image: require('./imagenes/roma.jpg'),origin: 'Miami', destination: 'Roma', departureDate: '2024-02-01', returnDate: '2024-02-05', price: 200 },
    {image: require('./imagenes/miami.jpg'),origin: 'Cuba', destination: 'Miami', departureDate: '2024-02-01', returnDate: '2024-02-05', price: 200 },
    {image: require('./imagenes/madrid.jpg'),origin: 'Roma', destination: 'Madrid', departureDate: '2024-02-01', returnDate: '2024-02-05', price: 200 },
    {image: require('./imagenes/habana.jpg'),origin: 'Roma', destination: 'Habana', departureDate: '2024-02-01', returnDate: '2024-02-05', price: 200 },
    {image: require('./imagenes/bracilia.jpg'),origin: 'Roma', destination: 'Bracilia', departureDate: '2024-02-01', returnDate: '2024-02-05', price: 200 },
    {image: require('./imagenes/bracilia.jpg'),origin: 'Roma', destination: 'Bracilia', departureDate: '2024-02-01', returnDate: '2024-02-05', price: 200 },
    {image: require('./imagenes/bracilia.jpg'),origin: 'Roma', destination: 'Bracilia', departureDate: '2024-02-01', returnDate: '2024-02-05', price: 200 },
    {image: require('./imagenes/bracilia.jpg'),origin: 'Roma', destination: 'Bracilia', departureDate: '2024-02-01', returnDate: '2024-02-05', price: 200 },
    {image: require('./imagenes/paris.jpg'), origin: 'Londres', destination: 'París', departureDate: '2024-02-01', returnDate: '2024-02-05', price: 200 },
    {image: require('./imagenes/mexico.jpg'),origin: 'Miami', destination: 'Mexico', departureDate: '2024-02-01', returnDate: '2024-02-05', price: 200 },
    {image: require('./imagenes/roma.jpg'),origin: 'Miami', destination: 'Roma', departureDate: '2024-02-01', returnDate: '2024-02-05', price: 200 },
    {image: require('./imagenes/miami.jpg'),origin: 'Cuba', destination: 'Miami', departureDate: '2024-02-01', returnDate: '2024-02-05', price: 200 },
    {image: require('./imagenes/madrid.jpg'),origin: 'Roma', destination: 'Madrid', departureDate: '2024-02-01', returnDate: '2024-02-05', price: 200 },
    {image: require('./imagenes/habana.jpg'),origin: 'Roma', destination: 'Habana', departureDate: '2024-02-01', returnDate: '2024-02-05', price: 200 },
    {image: require('./imagenes/bracilia.jpg'),origin: 'Roma', destination: 'Bracilia', departureDate: '2024-02-01', returnDate: '2024-02-05', price: 200 },
    {image: require('./imagenes/bracilia.jpg'),origin: 'Roma', destination: 'Bracilia', departureDate: '2024-02-01', returnDate: '2024-02-05', price: 200 },
    {image: require('./imagenes/bracilia.jpg'),origin: 'Roma', destination: 'Bracilia', departureDate: '2024-02-01', returnDate: '2024-02-05', price: 200 },
    {image: require('./imagenes/bracilia.jpg'),origin: 'Roma', destination: 'Bracilia', departureDate: '2024-02-01', returnDate: '2024-02-05', price: 200 },
    {image: require('./imagenes/paris.jpg'), origin: 'Londres', destination: 'París', departureDate: '2024-02-01', returnDate: '2024-02-05', price: 200 },
    {image: require('./imagenes/mexico.jpg'),origin: 'Miami', destination: 'Mexico', departureDate: '2024-02-01', returnDate: '2024-02-05', price: 200 },
    {image: require('./imagenes/roma.jpg'),origin: 'Miami', destination: 'Roma', departureDate: '2024-02-01', returnDate: '2024-02-05', price: 200 },
    {image: require('./imagenes/miami.jpg'),origin: 'Cuba', destination: 'Miami', departureDate: '2024-02-01', returnDate: '2024-02-05', price: 200 },
    {image: require('./imagenes/madrid.jpg'),origin: 'Roma', destination: 'Madrid', departureDate: '2024-02-01', returnDate: '2024-02-05', price: 200 },
    {image: require('./imagenes/habana.jpg'),origin: 'Roma', destination: 'Habana', departureDate: '2024-02-01', returnDate: '2024-02-05', price: 200 },
    {image: require('./imagenes/bracilia.jpg'),origin: 'Roma', destination: 'Bracilia', departureDate: '2024-02-01', returnDate: '2024-02-05', price: 200 },
    {image: require('./imagenes/bracilia.jpg'),origin: 'Roma', destination: 'Bracilia', departureDate: '2024-02-01', returnDate: '2024-02-05', price: 200 },
    {image: require('./imagenes/bracilia.jpg'),origin: 'Roma', destination: 'Bracilia', departureDate: '2024-02-01', returnDate: '2024-02-05', price: 200 },
    {image: require('./imagenes/bracilia.jpg'),origin: 'Roma', destination: 'Bracilia', departureDate: '2024-02-01', returnDate: '2024-02-05', price: 200 },
    // Agregar más datos de tarifas aquí
  ];

  const [visibleFares, setVisibleFares] = useState(8); // Número de tarifas visibles
  const [originFilter, setOriginFilter] = useState(''); // Filtro de origen

  // Manejar el clic en el botón "View More" para mostrar más tarifas
  const handleViewMore = () => {
    setVisibleFares(prevVisibleFares => prevVisibleFares + 8);
  };

  // Manejar el cambio en el filtro de origen
  const handleOriginFilterChange = event => {
    setOriginFilter(event.target.value);
  };

  // Filtrar las tarifas según el origen
  const filteredFares = faresData.filter(fare =>
    fare.origin.toLowerCase().startsWith(originFilter.toLowerCase())
  );

  // Función para redirigir al usuario al hacer clic en "Book Now"
  const handleBookNow = (origin, destination, departureDate, returnDate) => {
    const queryParams = new URLSearchParams({
      origin,
      destination,
      departureDate,
      returnDate
    }).toString();
    window.location.href = `/book?${queryParams}`;
  };

  return (
    <div className="container mx-auto p-4">
      <input
        type="text"
        placeholder="Filtrar por origen..."
        value={originFilter}
        onChange={handleOriginFilterChange}
        className="w-full mb-4 p-2 rounded border border-gray-300"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredFares.slice(0, visibleFares).map((fare, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded shadow flex flex-col">
            <img src={fare.image} alt={fare.origin} className="w-full h-auto mb-2 rounded" />
            <h3 className="font-bold">{fare.origin} to {fare.destination}</h3>
            <div className='flex justify-between w-full'>
            <p className='text-left font-semibold'>Departure: {fare.departureDate}</p>
            <p className='text-left font-semibold'>Return: {fare.returnDate}</p>
            </div>
            <p className=' text-blue-500 font-semibold'>Price: ${fare.price}</p>
            
            <button
              onClick={() => handleBookNow(fare.origin, fare.destination, fare.departureDate, fare.returnDate)}
              className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 "
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
      {visibleFares < filteredFares.length && (
        <div className='flex justify-center'>
        <button
          onClick={handleViewMore}
          className="bg-gray-800 text-white px-4 py-2 mt-4 rounded hover:bg-gray-900 focus:outline-none focus:bg-gray-900"
        >
          View More
        </button>
        </div>
      )}
    </div>
  );
};

export default FaresComponent;






