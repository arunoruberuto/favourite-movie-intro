document.addEventListener('DOMContentLoaded', (event) => {
    const characters = [
        { name: "カール・フレドリクセン", img: "images/carl.jpeg", desc: "<br>78歳のカールは、亡き妻との思い出の詰まった家で一人暮らしをしていた が、老人ホームに入居しなければならなくなる。若き日に妻と約束したパ ラダイス・フォールへの冒険に出ることを決意し、何千もの風船を屋根に くくりつけて家を宙に浮かせ、旅に出る。", voice: "<br><br><b>飯塚昭三<br>「いいづか しょうぞう」</b>", voiceImg: "images/carl_a.jpg" },
        { name: "ラッセル", img: "images/russel.jpeg", desc: "<br>カールの家の近くに住む、8歳の少年、ラッセル。自然探検隊の隊員で、 様々なバッジを集めている。カールの家が空を飛んだ時、”お年寄りのお手 伝いバッジ”を手に入れようとラッセルが家の中に入り込んでいたため、カ ールじいさんと一緒に旅をすることになる。", voice: "<br><br><b>立川大樹<br>「おおかわ りき」</b>", voiceImg: "images/russel_a.jpg" },
        { name: "ダグ", img: "images/dug.jpeg", desc: "<br><br><br>ダグは、パラダイス・フォールズに暮らすゴールデンレトリバー。喉に装 着している翻訳機のおかげで様々な言語を話すことができる。", voice: "<br><br><b>松本保典<br>「まつもと やすのり」</b>", voiceImg: "images/dug_a.jpg" },
        { name: "ケヴィン", img: "images/kevin.jpeg", desc: "<br>身長13フィート (約3メートル65センチ) もある非常に珍しい鳥。パラダ イス・フォールズでひっそりと生息している。鮮やかな虹色の羽毛と長く しなやかな首をもっており、その大きさにもかかわらず非常に早く警戒に 動く。ケヴィンという名前は、ラッセルが付けた。", voice: "Voice cast info for Russell", voiceImg: "" },
        { name: "エリー", img: "images/ellie.jpeg", desc: "カールの愛する妻、エリー。カールとは幼なじみ。2人はともに飛行船で 世界中を旅する伝説の冒険家チャールズ・マンツに憧れていた。いつの日 か、南米の熱帯雨林の奥深くにある世界一高い滝、パラダイス・フォール ズへ一緒に旅をしようと誓いあっていたが、日々の現実に追われて先延ば しにしているうちにエリーは亡くなってしまった。", voice: "<br><br><b>松元環季<br>「まつもと たまき」</b>", voiceImg: "images/eri_a.jpg" },
        { name: "チャールズ・マンツ", img: "images/charles.jpeg", desc: "チャールズ・マンツは1930年代初頭に活躍した伝説の冒険家。自分で設計 した巨大な飛行船で世界中を旅し、宝物を次々と発見していた。南米から 持ち帰った幻の生物の骨格を持ち帰った時、科学者に捏造だと決めつけら れたことで、正しいものだと証明するためにパラダイス・フォールズへ戻ったのだ。", voice: "<br><br><b>大木民夫<br>「おおき たみお」</b>", voiceImg: "images/charles_a.jpg" } 
    ];

    const containers = document.querySelectorAll('.character-container');
    let currentIndex = 0;

    containers.forEach((container, index) => {
        const characterName = container.querySelector('#characterName');
        const characterDescription = container.querySelector('#characterDescription');
        const characterImage = container.querySelector('#characterImage');

        if (characters[index]) {
            characterName.textContent = characters[index].name;
            characterDescription.innerHTML = characters[index].desc;
            characterImage.src = characters[index].img;
            characterImage.alt = characters[index].name;

            const backInfo = container.querySelector('.character-card .back .character-info');
            backInfo.innerHTML = characters[index].voice;

            const backImage = container.querySelector('.character-card .back .character-image img');
            backImage.src = characters[index].voiceImg;
            backImage.alt = `${characters[index].name} Voice Cast`;
        }
    });

    // Flip-card 
    document.querySelectorAll('.flip-button').forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.character-card');
            card.classList.toggle('flipped');
        });
    });

    // Sidebar
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggleBtn');
    const menu = document.getElementById('menu');
    const overlay = document.getElementById('overlay');

    toggleBtn.addEventListener('click', () => {
        const isExpanded = sidebar.classList.toggle('expanded');
        overlay.classList.toggle('visible', isExpanded);

        if (isExpanded) {
            toggleBtn.classList.add('hidden');
            menu.classList.remove('hidden');
            setTimeout(() => menu.classList.add('expanded'), 10);
        } else {
            toggleBtn.classList.remove('hidden');
            menu.classList.remove('expanded');
            setTimeout(() => menu.classList.add('hidden'), 300);
            overlay.classList.remove('visible');
        }
    });

    overlay.addEventListener('click', () => {
        if (sidebar.classList.contains('expanded')) {
            sidebar.classList.remove('expanded');
            menu.classList.remove('expanded');
            setTimeout(() => menu.classList.add('hidden'), 300);
            overlay.classList.remove('visible');
            toggleBtn.classList.remove('hidden');
        }
    });
});