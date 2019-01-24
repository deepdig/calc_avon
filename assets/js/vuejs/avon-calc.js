//var_dump for js
function dump(obj) {
    var out = '';
    for (var i in obj) {
        out += i + ": " + obj[i] + "\n";
    }

    alert(out);

    // or, if you wanted to avoid alerts...

    var pre = document.createElement('pre');
    pre.innerHTML = out;
    document.body.appendChild(pre);
}

var vm = new Vue({
    el: '#app',
    data: {
        title: 'Калькулятор доходов Эйвон',
        showButton: false,
        showBody: false,
        active: '',
        activeButton1: false,
        activeButton2: false,
        activeButton3: false,
        activeButton4: false,
        // inputs
        selectPopulation: '',
        selectFamaly: '',
        checkExperienceSales: '',
        checkExperienceBusiness: '',
        skillsСheckedArr: [],
        skillsNumberArr: [],
        selectAllPopulation: '',
        selectCity: '',
        checkSeasons: '',
        activityNumberArr: [],
        dopSaleNumberArr: [],
        selectNumCampaigns: '',
        selectNumYear: '',
        radioEarnings: '',

        // состояние аккордеона
        boxes: [{show: true}, {show: false}, { show: false}, {show: false}, {show: false}, {show: false}, {show: false}, {show: false}, {show: false}, {show: false}, {show: false}, {show: false}, {show: false}, {show: false}],
        // --- Данные ---
        // Количество населения
        selectPopulationArr: [{
            name: 'до 100 000 жителей',
            coef: 2
        }, {
            name: 'до 500 000 жителей',
            coef: 3
        }, {
            name: 'до 1 000 000 жителей',
            coef: 4
        }, {
            name: 'свыше 1 000 000 жителей',
            coef: 5
        }],
        // Число родственников и друзей
        selectFamalyArr: [{
            name: 'от 1 до 3 человек',
            coef: 3
        }, {
            name: 'от 3 до 5 человек',
            coef: 4
        }, {
            name: 'от 5 до 10 человек',
            coef: 5
        }, {
            name: 'от 10 и более человек',
            coef: 6
        }],
        // Оценка знаний и умений
        skillsArr: [{
            name: 'Коммуникабельность.',
            linkName: 'Как оценить?',
            coef: 3
        }, {
            name: 'Организованность.',
            linkName: 'Зачем это?',
            coef: 4
        }, {
            name: 'Решительность.',
            linkName: 'Зачем это?',
            coef: 5
        }, {
            name: 'Уровень знаний о косметике.',
            linkName: 'Чтобы понять свой уровень..',
            coef: 6
        }, {
            name: 'Обучаемость.',
            linkName: 'Как понять?',
            coef: 7
        }],
        // Учитывать коэффициент конкурентности
        coefCompetitionArr: [{
            name: 'Да.',
            linkName: '',
            coef: 3
        }],
        // Города для "Учитывать коэффициент конкурентности"
        cityArr: [{
            name: 'Москва',
            linkName: '',
            coef: 3
        }, {
            name: 'Шатура',
            linkName: '',
            coef: 3
        }],
        // Ваша активность
        activityArr: [{
            name: 'Кол-во часов для работы со знакомыми',
            linkName: '',
            coef: 3
        }, {
            name: 'Кол-во часов для поиска клиентов в интернете',
            linkName: '',
            coef: 3
        }, {
            name: 'Кол-во часов рекламы продукции на улице',
            linkName: '',
            coef: 3
        }, {
            name: 'Кол-во часов на самообучение',
            linkName: '',
            coef: 3
        }],
        //
        dopSaleArr: [{
            name: 'Офис',
            info: 'Укажите уровень пешей проходимости, оценив по шкале от 0 до 10',
            linkName: 'Как оценить?',
            coef: 3
        }, {
            name: 'Наличие сайта',
            linkName: '',
            coef: 3
        }],
        earningsArr: [{
            name: 'По-кампаниям',
            linkName: '',
            coef: 3
        }, {
            name: 'По-месячно',
            linkName: '',
            coef: 3
        }],
    },

    methods: {
        // управление аккордеоном
        mytoggle: function (n) {
            for (var i = 0; i < 13; i++) { // close all boxes
                vm.boxes[i].show = false;
            }
            vm.boxes[n].show = true; // open the corresponding box
        },
    },

    computed: {
        // подсчет предпологаемого дохода
        totalPrice: function() {
            var selectPopulation = this.selectTheme;
            var selectFamaly = this.selectFamaly;

            function checkedSum(array){
                var sum = 0;
                for(var i = 0; i < array.length; i++){
                    sum += array[i];
                    }
                return Number(sum);
            }

            return Math.round(
                +selectPopulation +
                +selectFamaly
            );
        },
        // функция активирующая заголовок "ОЦЕНИТЕ СВОИ УМЕНИЯ И ЗНАНИЯ"
        skillsFull: function() {
            var obj = this.skillsArr;
            var i = obj.length;

            for (var index = 0; index < i; ++index) {

                if (obj[i-1].done === true && obj[0].done === true) {
                    return true;
                }
            }
        },
        // функция активирующая заголовок "Ваша активность"
        activityFull: function() {
            var obj = this.activityArr;
            var i = obj.length;

            for (var index = 0; index < i; ++index) {

                if (obj[i-1].done === true && obj[0].done === true) {
                    return true;
                }
            }
        },
        // функция активирующая заголовок "Дополнительные инструменты продажи"
        dopSaleFull: function() {
            var obj = this.dopSaleArr;
            var i = obj.length;

            for (var index = 0; index < i; ++index) {

                if (obj[i-1].done === true && obj[0].done === true) {
                    return true;
                }
            }
        },
    }
});
