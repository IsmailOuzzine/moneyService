import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NoKYCPage = () => {
    const nationalities = [
        {
            code:144,
            nom_fr_fr:"Maroc",
            nom_en_gb:"Morocco",
            iso3:"MAR"
        },
        {
            code:145,
            nom_fr_fr:"Etas-Unis",
            nom_en_gb:"United-States",
            iso3:"USA"
        }
    ];
    const products = [
        {
            id: 1,
            title: 'Fawatir CMI',
            img: 'fawatir.png',
            link: ''
        },
        {
            id: 2,
            title: 'Vignette Automobile',
            img: 'vignette.png',
            link: ''
        },
        {
            id: 3,
            title: 'Facturier Corporate',
            img: 'facturier.png',
            link: ''
        },
        {
            id: 4,
            title: 'Recharges telephoniques',
            img: 'recharge.png',
            link: ''
        },
        {
            id: 5,
            title: 'Recharges telephoniques v2',
            img: 'recharge.png',
            link: ''
        },
        {
            id: 6,
            title: 'Recharges telephoniques v3',
            img: 'recharge.png',
            link: ''
        },
        {
            id: 7,
            title: 'ONCF',
            img: 'oncf-voyages.png',
            link: ''
        },
        {
            id: 8,
            title: 'Paiement Marchand',
            img: 'Paiement marchand.png',
            link: ''
        },
        {
            id: 9,
            title: 'PCP / PayExpress',
            img: 'recharge.png',
            link: ''
        },
        {
            id: 10,
            title: 'PCP / PayExpress',
            img: 'recharge.png',
            link: ''
        },
        {
            id: 11,
            title: 'Markoub',
            img: 'markoub.png',
            link: ''
        },
        {
            id: 12,
            title: 'Marketplace',
            img: 'cashplus.png',
            link: ''
        },
        {
            id: 13,
            title: 'Achat de devise',
            img: 'exchange.png',
            link: 'http://cashplus.ma:8082/mobichange/home.html#/achats/bordereauAchatView'
        }
    ];
    let client = {
        "client":{
            "nationality":{
                "code":144,
                "nom_fr_fr":"Maroc",
                "nom_en_gb":"Morocco",
                "iso3":"MAR"
            },
            "idType":"CIN",
            "phone":"",
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
            "firstName":"",
            "birthDate":"",
            "endValidity":"",
            "email":"",
            "idNum":"",
            "statusId":2,
            "customerId":1,
            "lastName":"",
            "address":"",
            "source":"",
            "version":0,
            "occupation":"",
            "title":"",
            "natIso3":"",
            "kycData":{
                "phoneCheckBy":0,
                "phone":"",
                "phoneCheckDate":"",
                "clientId":0,
                "phoneCheck":true
            },
            "validity":{
                "status":"ok"
            },
            // after adding passport
            "passport": "",
            "hash": "c435d9828ef88a805ef33cbc584f3bad8938d690e97142fb2b41edd41536f18e"
        },
      };
    const [idType, setIdType] = useState('CIN');
    const [idNum, setIdNum] = useState('');
    const [nationality, setNationality] = useState(nationalities[0]);
    const navigate = useNavigate();
    const handleSearch = () => {
        navigate('kyc-products');
    }
    
    const encode = (client) => btoa(JSON.stringify(client))

    const sendAchat = () => {
        window.location.href = 'http://cashplus.ma:8082/mobichange/home.html#/achats/bordereauAchatView?client='+encode(client);
    }
    
    const handleClickOnProduct = (product) => {
        console.log('figure clicked !');
        if(product.id == 13) sendAchat();
        else (console.log('Oups! this functionality is not defined yet.'));
    }
    return ( 
        <div className="row">
            <h2 className="title">Recherche Client</h2>
            <div className="hr"></div>
            <div className="col-md-4">
                <form onSubmit={handleSearch}>
                    <div className="card">
                        <div className="card-header">
                            <i className="bi bi-search"></i>
                            <p className="d-inline-block mx-2">Identification</p>
                        </div>

                        <div className="card-body bg-light">
                            <div className="form-group">
                                <label htmlFor="idType">Type de document</label>
                                <select 
                                className="form-input"
                                value={idType}
                                onChange={(e) => {setIdType(e.target.value)}}
                                >
                                    <option value="CIN">CIN</option>
                                    <option value="CSJ">Carte Séjour</option>
                                    <option value="PP">Passport</option>
                                </select>
                            </div>
                            { idType == 'PP' && <div className="form-group">
                                <label htmlFor="nationality">Nationalité</label>
                                <select 
                                className="form-input"
                                value={nationality}
                                onChange={(e) => {setNationality(e.target.value)}}
                                >
                                    {nationalities.map(n => (
                                        <option value={n}>{ n.nom_fr_fr }</option>
                                    ))}
                                </select>
                            </div>}
                            <div className="form-group">
                                <label htmlFor="idType">Numéro d'identification</label>
                                <input className="form-input" type="text" required value={idNum} onChange={(e) => setIdNum(e.target.value.toUpperCase() )}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="my-3">
                        <button className="btn-research">Rechercher</button>
                    </div>
                </form>
            </div>

            <div className="col-md-8">
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
 
export default NoKYCPage;