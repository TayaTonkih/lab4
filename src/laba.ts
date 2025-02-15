enum DocumentType {
    DriverLicense = "Водительские права",
    IdentityCard = "Удостоверение личности",
    TravelDocument = "Проездной документ"
}

interface IOwner {
    surname: string;
    name: string;
    patronymic: string;
    dateOfBirth: Date;
    document: DocumentType;
    seriesDocument: number;
    numberDocument: number;

    showInfo(): void;
}

class Owner implements IOwner {
    private _surname: string;
    private _name: string;
    private _patronymic: string;
    private _dateOfBirth: Date;
    private _document: DocumentType;
    private _seriesDocument: number;
    private _numberDocument: number;

    constructor(surname: string, name: string, patronymic: string, dateOfBirth: Date, document: DocumentType, seriesDocument: number, numberDocument: number) {
        this._surname = surname;
        this._name = name;
        this._patronymic = patronymic;
        this._dateOfBirth = dateOfBirth;
        this._document = document;
        this._seriesDocument = seriesDocument;
        this._numberDocument = numberDocument;
    }

    get surname(): string { return this._surname; }
    set surname(surname: string) { this._surname = surname; }

    get name(): string { return this._name; }
    set name(name: string) { this._name = name; }

    get patronymic(): string { return this._patronymic; }
    set patronymic(patronymic: string) { this._patronymic = patronymic; }

    get dateOfBirth(): Date { return this._dateOfBirth; }
    set dateOfBirth(dateOfBirth: Date) { this._dateOfBirth = dateOfBirth; }

    get document(): DocumentType { return this._document; }
    set document(document: DocumentType) { this._document = document; }

    get seriesDocument(): number { return this._seriesDocument; }
    set seriesDocument(seriesDocument: number) { this._seriesDocument = seriesDocument; }

    get numberDocument(): number { return this._numberDocument; }
    set numberDocument(numberDocument: number) { this._numberDocument = numberDocument; }

    showInfo(): void {
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

interface IVehicle {
    mark: string;
    model: string;
    yearOfRelease: number;
    VIN_number: string;
    registrationNumber: string;
    owner: IOwner;
    showInfo(): void;
}

class Vehicle implements IVehicle {
    private _mark: string;
    private _model: string;
    private _yearOfRelease: number;
    private _VIN_number: string;
    private _registrationNumber: string;
    private _owner: IOwner;

    constructor(mark: string, model: string, yearOfRelease: number, VIN_number: string, registrationNumber: string, owner: IOwner) {
        this._mark = mark;
        this._model = model;
        this._yearOfRelease = yearOfRelease;
        this._VIN_number = VIN_number;
        this._registrationNumber = registrationNumber;
        this._owner = owner;
    }

    get mark(): string { return this._mark; }
    set mark(mark: string) { this._mark = mark; }

    get model(): string { return this._model; }
    set model(model: string) { this._model = model; }

    get yearOfRelease(): number { return this._yearOfRelease; }
    set yearOfRelease(yearOfRelease: number) { this._yearOfRelease = yearOfRelease; }

    get VIN_number(): string { return this._VIN_number; }
    set VIN_number(VIN_number: string) { this._VIN_number = VIN_number; }

    get registrationNumber(): string { return this._registrationNumber; }
    set registrationNumber(registrationNumber: string) { this._registrationNumber = registrationNumber; }

    get owner(): IOwner { return this._owner; }
    set owner(owner: IOwner) { this._owner = owner; }

    showInfo(): void {
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

enum CarcaseType {
    Hatchback = "Хэтчбек",
    SUV = "Внедорожник",
    Convertible = "Кабриолет"
}

enum ClassCar {
    Economy = "Эконом",
    Standard = "Стандарт",
    Luxury = "Люкс"
}

interface ICar extends IVehicle {
    carcaseType: CarcaseType;
    classCar: ClassCar;
}

class Car extends Vehicle implements ICar {
    private _carcaseType: CarcaseType;
    private _classCar: ClassCar;

    constructor(mark: string, model: string, yearOfRelease: number, VIN_number: string, registrationNumber: string, owner: IOwner, carcaseType: CarcaseType, classCar: ClassCar) {
        super(mark, model, yearOfRelease, VIN_number, registrationNumber, owner);
        this._carcaseType = carcaseType;
        this._classCar = classCar;
    }

    get carcaseType(): CarcaseType { return this._carcaseType; }
    set carcaseType(carcaseType: CarcaseType) { this._carcaseType = carcaseType; }

    get classCar(): ClassCar { return this._classCar; }
    set classCar(classCar: ClassCar) { this._classCar = classCar; }

    showInfo(): void {
        super.showInfo();
        console.log(`Тип кузова: ${this._carcaseType}, Класс автомобиля: ${this._classCar}`);
    }
}

interface IMotorbike extends IVehicle {
    frameType: string;
    isSport: boolean;
}

class Motorbike extends Vehicle implements IMotorbike {
    private _frameType: string;
    private _isSport: boolean;

    constructor(mark: string, model: string, yearOfRelease: number, VIN_number: string, registrationNumber: string, owner: IOwner, frameType: string, isSport: boolean) {
        super(mark, model, yearOfRelease, VIN_number, registrationNumber, owner);
        this._frameType = frameType;
        this._isSport = isSport;
    }

    get frameType(): string { return this._frameType; }
    set frameType(frameType: string) { this._frameType = frameType; }

    get isSport(): boolean { return this._isSport; }
    set isSport(isSport: boolean) { this._isSport = isSport; }

    showInfo(): void {
        super.showInfo();
        console.log(`Тип рамы: ${this._frameType}, Спортивный: ${this._isSport}`);
    }
}

interface IVehicleStorage<T extends IVehicle> {
    creationDate: Date;
    vehicles: T[];
    addVehicle(vehicle: T): void;
    getAllVehicles(): T[];
}

class VehicleStorage<T extends IVehicle> implements IVehicleStorage<T> {
    creationDate: Date;
    vehicles: T[];

    constructor() {
        this.creationDate = new Date();
        this.vehicles = [];
    }

    addVehicle(vehicle: T): void {
        this.vehicles.push(vehicle);
    }

    getAllVehicles(): T[] {
        return this.vehicles;
    }
}



const owner1 = new Owner("Иванов", "Иван", "Иванович", new Date(1990, 1, 1), DocumentType.DriverLicense, 1234, 567890);
const car1 = new Car("Toyota", "RAV4", 2021, "1HGBH41JXMN109186", "A123BC", owner1, CarcaseType.SUV, ClassCar.Luxury);
const bike1 = new Motorbike("Yamaha", "YZF-R3", 2020, "2HGBH41JXMN109187", "B456CD", owner1, "Спортивная", true);

const garage = new VehicleStorage<IVehicle>();
garage.addVehicle(car1);
garage.addVehicle(bike1);

console.log("Список транспортных средств в гараже:");
garage.getAllVehicles().forEach(vehicle => vehicle.showInfo());