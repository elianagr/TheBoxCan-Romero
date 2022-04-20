import React from 'react'
import correa from '../img/correa_azul.png';
import ItemCount from './ItemCount';

const ItemList = ({producto, precio}) => {
  return (
    <div>
        <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <div>
                <a href="#" class="group">
                    <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <img src={correa} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="w-full h-full object-center object-cover group-hover:opacity-75" />
                    </div>
                    <h3 class="mt-4 text-sm text-gray-700">{producto}</h3>
                    <p class="mt-1 text-lg font-medium text-gray-900">${precio}</p>
                </a>
                <ItemCount/>
            </div>

            <div>
                <a href="#" class="group">
                    <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <img src={correa} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="w-full h-full object-center object-cover group-hover:opacity-75" />
                    </div>
                    <h3 class="mt-4 text-sm text-gray-700">{producto}</h3>
                    <p class="mt-1 text-lg font-medium text-gray-900">${precio}</p>
                </a>
                <ItemCount/>
            </div>

            <div>
                <a href="#" class="group">
                    <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <img src={correa} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="w-full h-full object-center object-cover group-hover:opacity-75" />
                    </div>
                    <h3 class="mt-4 text-sm text-gray-700">{producto}</h3>
                    <p class="mt-1 text-lg font-medium text-gray-900">${precio}</p>
                </a>
                <ItemCount/>
            </div>

            <div>
                <a href="#" class="group">
                    <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <img src={correa} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="w-full h-full object-center object-cover group-hover:opacity-75" />
                    </div>
                    <h3 class="mt-4 text-sm text-gray-700">{producto}</h3>
                    <p class="mt-1 text-lg font-medium text-gray-900">${precio}</p>
                </a>
                <ItemCount/>
            </div>

            
        </div>
    </div>
  )
}

export default ItemList