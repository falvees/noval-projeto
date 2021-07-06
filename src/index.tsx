import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import App from './App';

createServer({

  models: {
    user: Model,
  },

  seeds(server) {
    server.db.loadData({
      users: [
        {
          id: 1,
          name: 'Felipe Fonseca Alves Ribeiro',
          age: '25',
          gender: 'Masculino',
          type: 'Administrador'
        },
        {
          id: 2,
          name: 'Margareth Rosswell',
          age: '17',
          gender: 'Feminino',
          type: 'Usuario'
        },
        {
          id: 3,
          name: 'João da Silva',
          age: '22',
          gender: 'Masculino',
          type: 'Administrador'
        },
        {
          id: 4,
          name: 'f',
          age: '22',
          gender: 'Masculino',
          type: 'Administrador'
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/users', () => {
      return this.schema.all('user')
    })
    
    this.get("/users/:id/:name", (schema, request) => {
      const id = request.params.id
      const name = request.params.name.trim()
 
      if(name !== "") {
        return schema.db.users.findBy({name: name})
      } else {
        return schema.db.users.find(id)
      }
    })
    
    this.post('/users', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('user', data)
    })

    this.delete("/users/:id", (schema, request) => {
      const id = request.params.id
      const user = schema.db.users.find(id)
      schema.db.users.remove(user)

      return schema.db.users
    })

    this.put("/users/:id", (schema, request) => {
      const id = request.params.id
      const data = JSON.parse(request.requestBody)
      const user = schema.db.users.find(id)
      schema.db.users.update(user, data)

      return schema.db.users
    })


  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);