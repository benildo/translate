# PostYan - Translate Language JSON (Node) 
:es: :de: :it: :ru: :us: :gb: :kr: :cn: :fr: :uk: :jp:

This software can be used to translate files in JSON format in several languages ​​using the Yandex website. This system is widely used for the internationalization of Angular systems.

*The json file must have the limit of 2672 rows.

##  Getting Start 🏁

To use this system, you must install this project.

### Prerequisites :warning: 

- Node v6.10.2
- Visual Studio Code
- Postman
- Yandex Key


There is no set of settings for programs, only one Yandex Key you need to do some work as it is necessary to create an account on the site and create a key. follow the link to facilitate the purchase of this key.

- https://translate.yandex.com/developers/keys



###  Installation 🔨

After you install the prerequisites, clone the project into a folder of your choice. Then install the project using the command:

$ npm install 

Do not forget to add the Yandex key to /config/env/development.js 

Exemple:

module.exports = {
    yandexApiKey: 'Your-Yandex-Key'
};

## Running the tests :bicyclist:

To access the use the command:

$ npm start

### How to use the system :trophy:

1. Open the postman and select "POST"
2. In place type the local url with the name of the application and the desired language (en = English) Ex .: localhost:3003/translate/en
3. Select "Body"
4. Check "raw"
5. Select JSON
6. Paste the JSON object between {}
7. Click "Send"
8. The translated result appears below

```
Example for test:
{
    "notificacao":{
        "envioNotif":"Envio de Notificação",
        "erroNotif":"Erro ao enviar a notificação",
        "notifSucessoErroAuditoria":"Notificação enviada com sucesso.\n(*) Erro ao cadastrar auditoria.",
        "notifSucesso":"Notificação enviada com sucesso'",
        "max140c":"Máximo 140 caracteres.",
        "mensagem":"Mensagem",
        "notificar":"Notificar",
        "titulo":"Título"
        }
}

```

## Contribution :moneybag:

To contribute to the project deposit any account into my account.

## Authors :pencil2:

* **Benildo Junior** - *Initial work* - [Dev](https://github.com/benildo) :dog:
* **Anderson Ribeiro** - *Initial work* - [Dev](https://github.com/andersonribeirodemoraes) :rabbit:

## License :four_leaf_clover:

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Supported languages ​​and their respective codes :eyes:

https://tech.yandex.com/translate/doc/dg/concepts/api-overview-docpage/

## YanDex Key Limit

https://tech.yandex.com/translate/doc/dg/reference/translate-docpage/

