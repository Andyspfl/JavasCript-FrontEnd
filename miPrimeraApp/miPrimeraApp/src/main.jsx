import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import './index.css'
import { Product } from './Product'
import {  ProductSection } from './ProductSection'
const root = createRoot(document.getElementById('root'))
root.render(
  <React.Fragment>
    <App username="Andy Practica" name="andypractica">Andy Mayta</App>
    
    <ProductSection></ProductSection>
  </React.Fragment>
)
