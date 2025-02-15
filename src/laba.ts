export namespace Transport {
    export enum DocumentType {
        DriverLicense = "Водительские права",
        IdentityCard = "Удостоверение личности",
        TravelDocument = "Проездной документ",
    }

    export interface IOwner {
        surname: string;
        name: string;
        patronymic: string;
        dateOfBirth: Date;
        document: DocumentType;
        seriesDocument: number;
        numberDocument: number;

        showInfo(): void;
    }

    export interface IVehicle {
        mark: string;
        model: string;
        yearOfRelease: number;
        VIN_number: string;
        registrationNumber: string;
        owner: IOwner;

        showInfo(): void;
    }

    export enum CarcaseType {
        Hatchback = "Хэтчбек",
        SUV = "Внедорожник",
        Convertible = "Кабриолет",
    }

    export enum ClassCar {
        Economy = "Эконом",
        Standard = "Стандарт",
        Luxury = "Люкс",
    }

    export interface ICar extends IVehicle {
        carcaseType: CarcaseType;
        classCar: ClassCar;
    }

    export interface IMotorbike extends IVehicle {
        frameType: string;
        isSport: boolean;
    }

    export interface IVehicleStorage<T extends IVehicle> {
        creationDate: Date;
        vehicles: T[];

        addVehicle(vehicle: T): void;
        getAllVehicles(): T[];
    }

    export class Owner implements IOwner {
        constructor(
            public surname: string,
            public name: string,
            public patronymic: string,
            public dateOfBirth: Date,
            public document: DocumentType,
            public seriesDocument: number,
            public numberDocument: number
        ) {}

        showInfo(): void {
            console.log(`
            Владельцы:
            Фамилия: ${this.surname}
            Имя: ${this.name}
            Отчество: ${this.patronymic}
            Дата рождения: ${this.dateOfBirth.toLocaleDateString()}
            Тип документа: ${this.document}
            Серия документа: ${this.seriesDocument}
            Номер документа: ${this.numberDocument}`);
        }
    }

    export class Vehicle implements IVehicle {
        constructor(
            public mark: string,
            public model: string,
            public yearOfRelease: number,
            public VIN_number: string,
            public registrationNumber: string,
            public owner: IOwner
        ) {}

        showInfo(): void {
            console.log(`
            Транспортное средство:
            Марка: ${this.mark}
            Модель: ${this.model}
            Год выпуска: ${this.yearOfRelease}
            VIN-номер: ${this.VIN_number}
            Регистрационный номер: ${this.registrationNumber}`);
        }
    }

    export class Car extends Vehicle implements ICar {
        constructor(
            mark: string,
            model: string,
            yearOfRelease: number,
            VIN_number: string,
            registrationNumber: string,
            owner: IOwner,
            public carcaseType: CarcaseType,
            public classCar: ClassCar
        ) {
            super(mark, model, yearOfRelease, VIN_number, registrationNumber, owner);
        }

        showInfo(): void {
            super.showInfo();
            console.log(`Тип кузова: ${this.carcaseType}, Класс автомобиля: ${this.classCar}`);
        }
    }

    export class Motorbike extends Vehicle implements IMotorbike {
        constructor(
            mark: string,
            model: string,
            yearOfRelease: number,
            VIN_number: string,
            registrationNumber: string,
            owner: IOwner,
            public frameType: string,
            public isSport: boolean
        ) {
            super(mark, model, yearOfRelease, VIN_number, registrationNumber, owner);
        }

        showInfo(): void {
            super.showInfo();
            console.log(`Тип рамы: ${this.frameType}, Спортивный: ${this.isSport}`);
        }
    }

    export class VehicleStorage<T extends IVehicle> implements IVehicleStorage<T> {
        public creationDate: Date;
        public vehicles: T[];

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
}
