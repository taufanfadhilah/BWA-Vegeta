import { Prisma, PrismaClient, ProductCategory } from "@prisma/client";
const prisma = new PrismaClient();

const main = async () => {
  // reset table
  await prisma.product.deleteMany({
    where: {},
  });

  const data: Prisma.ProductCreateInput[] = [
    {
      name: "Wortel",
      img: "/assets/products/wortel.jpeg",
      category: ProductCategory.VEGETABLE,
      description:
        "Wortel, yang memiliki nama ilmiah Daucus carota, adalah sayuran akar yang dikenal karena warnanya yang cerah dan rasa manis alami. Biasanya berwarna oranye, meskipun ada varietas yang juga bisa merah, ungu, kuning, atau putih. Wortel kaya akan beta-karoten, yang merupakan prekursor vitamin A penting bagi kesehatan mata dan sistem kekebalan tubuh. Selain itu, wortel juga mengandung serat diet yang baik untuk pencernaan dan menjaga kesehatan jantung. Dapat dikonsumsi mentah sebagai camilan sehat, dimasak dalam berbagai hidangan, atau digunakan sebagai bahan dasar dalam berbagai resep kuliner, wortel memiliki peran yang krusial dalam mendorong gaya hidup sehat dan gizi seimbang.",
      price: 4500,
      rating: 5,
    },
    {
      name: "Jagung",
      img: "/assets/products/jagung.jpeg",
      category: ProductCategory.VEGETABLE,
      description:
        "Jagung, dengan nama ilmiah Zea mays, adalah tanaman serealia yang dikenal karena tongkol bijinya yang unik dan kaya akan butir-butir manis. Biasanya berwarna kuning, meskipun ada juga varietas dengan warna putih, merah, atau ungu. Tanaman jagung tumbuh tegak dengan daun yang panjang dan lebar, memberikan ciri khas ladang hijau yang melambangkan musim panen. Kaya akan karbohidrat kompleks, serat pangan, dan beberapa nutrisi esensial, jagung merupakan sumber energi yang penting dalam berbagai budaya kuliner. Jagung dapat dimasak dengan berbagai cara seperti direbus, dipanggang, atau digiling menjadi tepung untuk membuat makanan seperti tortilla dan produk olahan lainnya. Selain sebagai makanan, jagung juga memiliki peran dalam industri pakan ternak dan sebagai bahan baku dalam berbagai produk seperti sirup jagung tinggi fruktosa dan bahan bakar ethanol.",
      price: 3000,
      rating: 4,
    },
    {
      name: "Semangka",
      img: "/assets/products/semangka.jpeg",
      category: ProductCategory.FRUIT,
      description:
        "Semangka, yang memiliki nama ilmiah Citrullus lanatus, adalah buah musim panas yang terkenal karena daging buahnya yang segar, manis, dan berair. Kulit luarnya biasanya berwarna hijau dengan corak garis-garis gelap atau bercak-bercak. Buah ini memiliki rasa yang menyegarkan dan kandungan air yang tinggi, menjadikannya pilihan populer untuk mengatasi haus dan menyediakan hidrasi pada hari-hari panas. Kaya akan likopen, antioksidan yang mendukung kesehatan jantung dan melindungi sel-sel tubuh dari kerusakan oksidatif, semangka juga mengandung vitamin C dan A serta beberapa mineral penting. Biasanya dimakan langsung sebagai potongan buah atau diolah menjadi jus, semangka memberikan kesan rasa manis yang khas dan kepuasan dalam setiap gigitannya.",
      price: 11000,
      rating: 5,
    },
    {
      name: "Jahe",
      img: "/assets/products/jahe.jpeg",
      category: ProductCategory.SPICE,
      description:
        "Jahe, yang memiliki nama ilmiah Zingiber officinale, adalah akar tumbuhan yang telah lama digunakan sebagai rempah-rempah dan bahan obat tradisional dalam berbagai budaya. Akar jahe memiliki aroma khas yang hangat dan pedas, serta rasa yang memberikan sentuhan segar dan tajam pada makanan dan minuman. Jahe mengandung senyawa bioaktif seperti gingerol, yang memiliki sifat antiinflamasi dan antioksidan, serta dapat memberikan manfaat kesehatan seperti meredakan mual, meringankan nyeri sendi, dan meningkatkan sirkulasi darah. Jahe dapat digunakan dalam berbagai bentuk, seperti jahe segar yang diiris atau digeprek untuk dimasukkan ke dalam hidangan, jahe kering yang digunakan sebagai bumbu, atau jahe dalam bentuk ekstrak atau teh. Keunikan rasa dan manfaat kesehatannya telah membuat jahe menjadi elemen penting dalam dunia kuliner dan pengobatan alami.",
      price: 2000,
      rating: 2,
    },
    {
      name: "Kacang Tanah",
      img: "/assets/products/kacang.jpeg",
      category: ProductCategory.BEANS,
      description:
        "Kacang tanah, atau juga dikenal sebagai kacang arachis atau buncis tanah dengan nama ilmiah Arachis hypogaea, adalah jenis kacang-kacangan yang ditanam karena bijinya yang kaya akan nutrisi dan memiliki rasa khas. Tumbuhan kacang tanah tumbuh sebagai semak kecil dengan bunga berwarna kuning dan buah yang sebenarnya tumbuh di bawah tanah. Kacang tanah sering diolah menjadi berbagai bentuk makanan, seperti kacang panggang, mentega kacang, dan minyak kacang tanah. Kaya akan protein nabati, serat, dan sejumlah vitamin serta mineral, kacang tanah merupakan sumber energi yang baik dan memiliki potensi manfaat kesehatan seperti mendukung fungsi otak, jantung, dan pengelolaan berat badan. Kacang tanah juga dapat menjadi bagian penting dari berbagai hidangan dan camilan di berbagai budaya.",
      price: 20000,
      rating: 3,
    },
    {
      name: "Jamur Kancing",
      img: "/assets/products/jamur.png",
      category: ProductCategory.FUNGI,
      description:
        "Jamur kancing, dengan nama ilmiah Agaricus bisporus, adalah jenis jamur yang sering digunakan dalam masakan karena rasa dan teksturnya yang serbaguna. Jamur kancing memiliki tudung yang bulat dan berwarna putih hingga cokelat kemerahan, serta batang yang kokoh dan putih. Mereka dapat tumbuh dalam berbagai ukuran, dari kecil hingga besar. Jamur kancing memiliki rasa lembut dengan sentuhan kerenyahan yang unik saat dimasak. Karena sifatnya yang menyerap rasa, jamur kancing merupakan tambahan yang populer dalam hidangan seperti tumisan, sup, pasta, dan sajian lainnya. Selain rasa yang enak, jamur kancing juga mengandung nutrisi seperti protein, serat, vitamin B, dan mineral seperti selenium, yang memberikan manfaat bagi kesehatan sistem kekebalan tubuh dan pencernaan.",
      price: 18000,
      rating: 2,
    },
    {
      name: "Buah Naga",
      img: "/assets/products/buah naga.png",
      category: ProductCategory.FRUIT,
      description:
        "Buah naga, yang juga dikenal sebagai pitaya, adalah buah tropis yang menarik perhatian dengan warna-warni cerah dan bentuk uniknya. Ada dua varietas utama: buah naga merah dengan kulit merah atau merah muda, dan buah naga putih dengan kulit kuning atau merah muda pucat. Buah naga memiliki daging yang lembut dan mengandung banyak biji kecil yang dapat dimakan. Rasanya manis dengan sentuhan krispi, mirip dengan buah-buahan tropis lainnya. Kaya akan vitamin C, serat, dan antioksidan, buah naga dianggap bermanfaat dalam menjaga kesehatan kulit, sistem pencernaan, dan sistem kekebalan tubuh. Selain dimakan langsung, buah naga juga sering digunakan dalam berbagai makanan dan minuman, seperti smoothie, salad, atau sebagai hiasan dekoratif pada hidangan.",
      price: 45000,
      rating: 5,
    },
    {
      name: "Sawi",
      img: "/assets/products/sawi.jpeg",
      category: ProductCategory.FRUIT,
      description:
        "Sawi, atau juga dikenal sebagai mustard greens, adalah jenis sayuran daun yang berasal dari keluarga Brassicaceae. Sawi memiliki daun yang beragam bentuk, dari yang berlapis-lapis hingga yang berbentuk keriting atau bergelombang. Warna daunnya dapat bervariasi dari hijau tua hingga ungu gelap. Rasanya bisa berkisar dari pahit hingga pedas tergantung pada varietas dan bagaimana mereka dimasak. Sawi kaya akan nutrisi seperti vitamin K, vitamin C, folat, dan serat. Sayuran ini sering digunakan dalam berbagai masakan, baik dijadikan bagian tumisan, sup, atau dicampurkan dalam salad. Dengan kandungan nutrisi yang baik dan rasa yang khas, sawi adalah tambahan yang berharga dalam menciptakan hidangan yang sehat dan lezat.",
      price: 2500,
      rating: 4,
    },
    {
      name: "Bayam Merah",
      img: "/assets/products/bayam.jpeg",
      category: ProductCategory.VEGETABLE,
      description:
        "Bayam merah, juga dikenal sebagai amaranth, adalah jenis tanaman daun yang menarik perhatian dengan warna merah yang mencolok pada daun dan tangkainya. Daun bayam merah memiliki bentuk yang beragam, mulai dari oval hingga panjang dan runcing. Warna merah pada daunnya dapat bervariasi dari merah muda hingga merah tua. Rasanya lembut dan sedikit kriuk dengan sentuhan rasa khas bayam. Kaya akan nutrisi seperti vitamin A, vitamin C, zat besi, dan serat, bayam merah dianggap memiliki potensi manfaat bagi kesehatan kulit, penglihatan, dan sistem kekebalan tubuh. Bayam merah sering digunakan dalam berbagai hidangan, mulai dari sajian segar seperti salad hingga hidangan masakan seperti tumisan atau sup. Dengan penampilan yang mencolok dan manfaat gizi yang baik, bayam merah memberikan variasi menarik dalam dunia sayuran hijau.",
      price: 4500,
      rating: 4,
    },
    {
      name: "Daung Bawang",
      img: "/assets/products/daun bawang.jpeg",
      category: ProductCategory.VEGETABLE,
      description:
        "Daun bawang, yang juga dikenal sebagai bawang prei, adalah sayuran yang terkenal karena tangkai panjang dan daunnya yang memiliki rasa bawang yang lembut dan sedikit pedas. Daun bawang memiliki batang putih atau hijau pucat yang bengkok dan daun hijau yang panjang. Baik bagian putih maupun hijau dari daun bawang dapat dimakan, dan keduanya memberikan aroma dan rasa yang khas pada berbagai hidangan. Kaya akan vitamin K, vitamin C, dan serat, daun bawang adalah tambahan yang umum dalam masakan seperti sup, tumisan, atau sebagai hiasan untuk memberikan sentuhan segar pada hidangan. Dengan rasa yang lezat dan nilai gizi yang baik, daun bawang telah menjadi salah satu bahan penting dalam banyak masakan di berbagai budaya.",
      price: 9000,
      rating: 5,
    },
  ];

  await prisma.product.createMany({
    data,
  });
};

export default main;
