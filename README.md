Öncelikle package.json dosyasının bulunduğu yolda

```bash
npm install
```

komutunu çalıştırın. Daha sonra mail servis ve token servis ile ilgili dosyalarda .env dosyasının
okunabilmesi için "process.env" ile başlayan bütün kısımları .env dosyası oluşturarak doldurun.
Mail ve token ile ilgili doğru konfigürasyonları yaptıktan sonra .Net projesi içerisindeki controller
kısmında mail göndermek istediğiniz gerçek adresle "GonderilecekAdres" parametresini doldurun.

### "MediumMailServiceNode" projesini aşağıdaki komutlardan herhangi biriyle çalıştırabilirsiniz.
```bash
npm run run-with-node
```
```bash
npm run run-with-nodemon
```
```bash
npm run run-with-forever
```
```bash
npm run run-with-pm2
```

Her iki projeyi de çalıştırdıktan sonra .Net webapi üzerinden swagger yardımıyla "Get" isteği yaparak uygulamaları test edebilirsiniz.
