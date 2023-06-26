import { useState } from "react";

const KYCPage = () => {
  let client = {
    "existCustomer":true,
    "message":"Ce client existe mais pas encore fiché dans la base",
    "exist":false,
    "account":{},
    "existAccount":false,
    "existType":true,
    "client":{
        "nationality":{
            "code":144,
            "nom_fr_fr":"Maroc",
            "nom_en_gb":"Morocco",
            "iso3":"MAR"
        },
        "idType":"CIN",
        "phone":"0690948324",
        "cities":{
            "postalCode":26100,
            "id":130,
            "name":"Berrechid"
        },
        "fidelityInfo":{
            "idclient":309,
            "hasCard":true,
            "points":100
        },
        "firstName":"ISMAIL",
        "birthDate":"August,12 1992 00:00:00",
        "endValidity":"May,19 2030 00:00:00",
        "email":"ouzzineismail99@gmail.com",
        "idNum":"WA276325",
        "statusId":2,
        "customerId":309,
        "lastName":"OUZZINE",
        "address":"RUE 5 HAY AL HOUDA",
        "source":"CPMS",
        "version":0,
        "occupation":"Salarié",
        "title":"MR",
        "natIso3":"MAR",
        "kycData":{
            "phoneCheckBy":56,
            "phone":"0690948324",
            "phoneCheckDate":"August,04 2022 11:08:25",
            "clientId":309,
            "phoneCheck":true
        },
        "validity":{
            "status":"ok"
        },
        // after adding passport
        "passport": "34008521",
        // this hash is sha256('ASMAA-ATILLAH-secret_key')
        // "hash": "be73570400e615fdab4537e097dd9710fb31e65f7fb92ecf4326aca79d00b155"
        // this hash is sha256('ISMAIL-OUZZINE-secret_key')
        "hash": "92f9ec3c5abaf2435db7e1700aac5f5bee0800e3caca891d445a7f47979f9d87"
    },
    "existCountryCsj":true
  };

  const clientdata = client.client;
  const encode = (client) => btoa(JSON.stringify(client))

  const sendVente = () => {
    window.location.href = 'http://cashplus.ma:8082/mobichange/home.html#/ventes/bordereauVenteView?client='+encode(client);
  }

  const sendAchat = () => {
    window.location.href = 'http://cashplus.ma:8082/mobichange/home.html#/achats/bordereauAchatView?client='+encode(client);
  }

  const handleClickOnProduct = (product) => {
    console.log('figure clicked !')
    if(product.id == 8) sendAchat();
    else if(product.id == 9) sendVente();
    else (console.log('Oups! this functionality is not defined yet.'));
  }

  const products = [
      {
          id: 1,
          title: 'Cash In National',
          img: 'cashplus.png',
          link: ''
      },
      {
          id: 2,
          title: 'Cash Out National',
          img: 'cashout national.png',
          link: ''
      },
      {
          id: 3,
          title: 'Cash Out International',
          img: 'cashout international.png',
          link: ''
      },
      {
          id: 4,
          title: 'CNSS Paiment',
          img: 'cnss.png',
          link: ''
      },
      {
          id: 5,
          title: 'Tayssir Paiement',
          img: 'tayssir paiement.png',
          link: ''
      },
      {
          id: 6,
          title: 'Fidelité',
          img: 'fidelite.png',
          link: ''
      },
      {
          id: 7,
          title: 'Secours Familial',
          img: 'secours familal.png',
          link: ''
      },
      {
          id: 8,
          title: 'Achat de devise',
          img: 'exchange.png',
          link: ''
      },
      {
          id: 9,
          title: 'Vente de devise',
          img: 'exchange.png',
          link: ''
      },
  ];
  const [idNum, setIdNum] = useState('');
  return ( 
      <div className="row">
          <div className="hr"></div>
          <div className="col-md-3">
              <div className="card">
                  <div className="card-header">
                      <i className="bi bi-person-fill"></i>
                      <p className="d-inline-block mx-2">Détails Client</p>
                  </div>

                  <div className="card-body bg-light userdata">
                      <img src="/bg.png" alt="" id="userdata-image" />
                  </div>
              </div>
          </div>

          <div className="col-md-9">
              <div className="card">
                  <div className="card-header">
                      <i className="bi bi-microsoft"></i>
                      <p className="d-inline-block mx-2">Produits</p>
                  </div>

                  <div className="card-body bg-light">
                      {products.map(p => (
                          <figure key={p.id} className='figure product' onClick={() => handleClickOnProduct(p)}>
                              <img src={'/'+p.img} className="figure-img img-fluid rounded image-product" alt=""/>
                              <figcaption className="figure-caption text-center product-title">{p.title}</figcaption>
                          </figure>
                      ))}
                  </div>
              </div>
          </div>
      </div>
    );
}
 
export default KYCPage;