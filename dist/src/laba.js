var DocumentType;
(function (DocumentType) {
    DocumentType["DriverLicense"] = "Водительские права";
    DocumentType["IdentityCard"] = "Удостоверение личности";
    DocumentType["TravelDocument"] = "Проездной документ";
})(DocumentType || (DocumentType = {}));
class Owner {
    constructor(surname, name, patronymic, dateOfBirth, document, seriesDocument, numberDocument) {
        this._surname = surname;
        this._name = name;
        this._patronymic = patronymic;
        this._dateOfBirth = dateOfBirth;
        this._document = document;
        this._seriesDocument = seriesDocument;
        this._numberDocument = numberDocument;
    }
    get surname() { return this._surname; }
    set surname(surname) { this._surname = surname; }
    get name() { return this._name; }
    set name(name) { this._name = name; }
    get patronymic() { return this._patronymic; }
    set patronymic(patronymic) { this._patronymic = patronymic; }
    get dateOfBirth() { return this._dateOfBirth; }
    set dateOfBirth(dateOfBirth) { this._dateOfBirth = dateOfBirth; }
    get document() { return this._document; }
    set document(document) { this._document = document; }
    get seriesDocument() { return this._seriesDocument; }
    set seriesDocument(seriesDocument) { this._seriesDocument = seriesDocument; }
    get numberDocument() { return this._numberDocument; }
    set numberDocument(numberDocument) { this._numberDocument = numberDocument; }
    showInfo() {
        console.log(`
        Владельцы:
        Фамилия: ${this._surname}
        Имя: ${this._name}
        Отчество: ${this._patronymic}
        Дата рождения: ${this._dateOfBirth.toLocaleDateString()}
        Тип документа: ${this._document}
        Серия документа: ${this._seriesDocument}
        Номер документа: ${this._numberDocument}
        `);
    }
}
class Vehicle {
    constructor(mark, model, yearOfRelease, VIN_number, registrationNumber, owner) {
        this._mark = mark;
        this._model = model;
        this._yearOfRelease = yearOfRelease;
        this._VIN_number = VIN_number;
        this._registrationNumber = registrationNumber;
        this._owner = owner;
    }
    get mark() { return this._mark; }
    set mark(mark) { this._mark = mark; }
    get model() { return this._model; }
    set model(model) { this._model = model; }
    get yearOfRelease() { return this._yearOfRelease; }
    set yearOfRelease(yearOfRelease) { this._yearOfRelease = yearOfRelease; }
    get VIN_number() { return this._VIN_number; }
    set VIN_number(VIN_number) { this._VIN_number = VIN_number; }
    get registrationNumber() { return this._registrationNumber; }
    set registrationNumber(registrationNumber) { this._registrationNumber = registrationNumber; }
    get owner() { return this._owner; }
    set owner(owner) { this._owner = owner; }
    showInfo() {
        console.log(`
        Транспортное средство:
        Марка: ${this._mark}
        Модель: ${this._model}
        Год выпуска: ${this._yearOfRelease}
        VIN-номер: ${this._VIN_number}
        Регистрационный номер: ${this._registrationNumber}
        `);
    }
}
var CarcaseType;
(function (CarcaseType) {
    CarcaseType["Hatchback"] = "Хэтчбек";
    CarcaseType["SUV"] = "Внедорожник";
    CarcaseType["Convertible"] = "Кабриолет";

})(CarcaseType || (CarcaseType = {}));
var ClassCar;
(function (ClassCar) {
    ClassCar["Economy"] = "Эконом";
    ClassCar["Standard"] = "Стандарт";
    ClassCar["Luxury"] = "Люкс";
})(ClassCar || (ClassCar = {}));
class Car extends Vehicle {
    constructor(mark, model, yearOfRelease, VIN_number, registrationNumber, owner, carcaseType, classCar) {
        super(mark, model, yearOfRelease, VIN_number, registrationNumber, owner);
        this._carcaseType = carcaseType;
        this._classCar = classCar;
    }
    get carcaseType() { return this._carcaseType; }
    set carcaseType(carcaseType) { this._carcaseType = carcaseType; }
    get classCar() { return this._classCar; }
    set classCar(classCar) { this._classCar = classCar; }
    showInfo() {
        super.showInfo();
        console.log(`Тип кузова: ${this._carcaseType}, Класс автомобиля: ${this._classCar}`);
    }
}
class Motorbike extends Vehicle {
    constructor(mark, model, yearOfRelease, VIN_number, registrationNumber, owner, frameType, isSport) {
        super(mark, model, yearOfRelease, VIN_number, registrationNumber, owner);
        this._frameType = frameType;
        this._isSport = isSport;
    }
    get frameType() { return this._frameType; }
    set frameType(frameType) { this._frameType = frameType; }
    get isSport() { return this._isSport; }
    set isSport(isSport) { this._isSport = isSport; }
    showInfo() {
        super.showInfo();
        console.log(`Тип рамы: ${this._frameType}, Спортивный: ${this._isSport}`);
    }
}
class VehicleStorage {
    constructor() {
        this.creationDate = new Date();
        this.vehicles = [];
    }
    addVehicle(vehicle) {
        this.vehicles.push(vehicle);
    }
    getAllVehicles() {
        return this.vehicles;
    }
}
// Пример использования
const owner1 = new Owner("Иванов", "Иван", "Иванович", new Date(1990, 1, 1), DocumentType.DriverLicense, 1234, 567890);
const car1 = new Car("Toyota", "RAV4", 2021, "1HGBH41JXMN109186", "A123BC", owner1, CarcaseType.SUV, ClassCar.Luxury);
const bike1 = new Motorbike("Yamaha", "YZF-R3", 2020, "2HGBH41JXMN109187", "B456CD", owner1, "Спортивная", true);
const garage = new VehicleStorage();
garage.addVehicle(car1);
garage.addVehicle(bike1);
console.log("Список транспортных средств в гараже:");
garage.getAllVehicles().forEach(vehicle => vehicle.showInfo());