declare namespace Transport {
    enum DocumentType {
        DriverLicense = "Водительские права",
        IdentityCard = "Удостоверение личности",
        TravelDocument = "Проездной документ",
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

    interface IVehicle {
        mark: string;
        model: string;
        yearOfRelease: number;
        VIN_number: string;
        registrationNumber: string;
        owner: IOwner;

        showInfo(): void;
    }

    enum CarcaseType {
        Hatchback = "Хэтчбек",
        SUV = "Внедорожник",
        Convertible = "Кабриолет",
    }

    enum ClassCar {
        Economy = "Эконом",
        Standard = "Стандарт",
        Luxury = "Люкс",
    }

    interface ICar extends IVehicle {
        carcaseType: CarcaseType;
        classCar: ClassCar;
    }

    interface IMotorbike extends IVehicle {
        frameType: string;
        isSport: boolean;
    }

    interface IVehicleStorage<T extends IVehicle> {
        creationDate: Date;
        vehicles: T[];

        addVehicle(vehicle: T): void;
        getAllVehicles(): T[];
    }

    class Owner implements IOwner {
        constructor(surname: string, name: string, patronymic: string, dateOfBirth: Date, document: DocumentType, seriesDocument: number, numberDocument: number);
        showInfo(): void;
    }

    class Vehicle implements IVehicle {
        constructor(mark: string, model: string, yearOfRelease: number, VIN_number: string, registrationNumber: string, owner: IOwner);
        showInfo(): void;
    }

    class Car extends Vehicle implements ICar {
        constructor(mark: string, model: string, yearOfRelease: number, VIN_number: string, registrationNumber: string, owner: IOwner, carcaseType: CarcaseType, classCar: ClassCar);
    }

    class Motorbike extends Vehicle implements IMotorbike {

        constructor(mark: string, model: string, yearOfRelease: number, VIN_number: string, registrationNumber: string, owner: IOwner, frameType: string, isSport: boolean);
    }

    class VehicleStorage<T extends IVehicle> implements IVehicleStorage<T> {
        constructor();
        addVehicle(vehicle: T): void;
        getAllVehicles(): T[];
    }
}
