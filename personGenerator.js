const personGenerator = {
    surnameJson: `{  
        "count": 16,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }

    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "София",
            "id_2": "Анастасия",
            "id_3": "Дарья",
            "id_4": "Мария",
            "id_5": "Анна",
            "id_6": "Виктория",
            "id_7": "Полина",
            "id_8": "Елизавета",
            "id_9": "Екатерина",
            "id_10": "Ксения"
        }
    }`,
    

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomGender: function() {
        return Math.round(Math.random()) == 1 ? this.GENDER_FEMALE : this.GENDER_MALE;
    },

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function(gender) {
        if (gender == this.GENDER_MALE)
        {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },


    randomSurname: function(gender) {
        if (gender == this.GENDER_MALE) 
        {  
            return this.randomValue(this.surnameJson);
        } else {
            return this.randomValue(this.surnameJson) + 'a';
        }
    },

    randomBirthYear: function() {
        return this.randomIntNumber(2002,1950);
    },

    getPerson: function () {
        this.person = {};

        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName(this.person.gender);
        this.person.Surname = this.randomSurname(this.person.gender);
        
        this.person.birthYear = this.randomBirthYear();
        return this.person;
    },
};

