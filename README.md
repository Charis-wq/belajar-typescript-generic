# belajar-typescript-generic
GENERIC
Apa itu Generic?
generic adalah fitur di typescript yang memungkinkan kita membuat komponen yang bekerja dengan berbagai tipe data
sambil tetap menjaga tipe statis yang kuat 
dengan generic kita dapat menulis kode yang lebih fleksibel dan dapat digunakan kembali dan aman secara tipe tanpa harus kehilangan inforamsi tipe data
generic sering digunakan pada function,class dan interface untuk memastikan tipe tetep konsisten
bahkan ketika komponen dipakai untuk berbagai tipe data

Mengapa menggunakan Generic?
konsisten tipe: generic menjaga agar tipe tetap konsisten di seluruh aplikasi

kode fleksibel dan reusable: funsi atau class dapat digunakan dengan tipe data yang berbeda tanpa mengorbankan keamanan tipe

memperkuat tipe statis: typescript dapat memberikan lebih banyak bantuan tipe selama pengembangan dengan generic 

Generic pada Function 
fungsi dengan generic memungkinkan kita membuat funsi yang bekerja dengan berbagai tipe data yang tetap aman secara tipe

Generic class
kita juga dapat menggunakan generic pada class untuk membuat class yang dapat menangani berbagai tipe 

Generic Interface 
interface juga dapat memanfaatkan generic untuk membuat tipe yang fleksibel

Batasan Generic (Constraints)
kadang-kadang kita ingin membatasi tipe yang dapat digunakan pada generic kita bisa menggunakan constraints untuk mengatur batasan pada generic

Generic pada Function dan Tipe Default
kita juga dapat memberikan tipe default pada generic sehingga jika tipe tidak disediakan typescript akan menggunakan tipe default tersebut

Kesimpulan 
generic di typescript adalah fitur yang sangat kuat dan memungkinkan pembuatan function,class dan interface yang fleksibel,reausable dan aman secara dengan menggunakan generic kita dapat menulis kode yang lebih modular dan mencegah kesalahan tipe yang tidak diinginkan tanpa kehilanagan fleksibelitas yang di tawarkan javascript
generic adalah fitur yang esensial untuk membangun aplikasi besar dan kompleks dalam typescript karena membantu menjaga tipe yang konsisten di seluruh sistem aplikasi.g