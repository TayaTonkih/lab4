import {Transport} from "./laba3";

const owner1 = new Transport.Owner(
    "Иванов",
    "Иван",
    "Иванович",
    new Date(1990, 1, 1),
    Transport.DocumentType.DriverLicense,
    1234,
    567890
);

const car1 = new Transport.Car(
    "Toyota",
    "RAV4",
    2021,
    "1HGBH41JXMN109186",
    "A123BC",
    owner1,
    Transport.CarcaseType.SUV,
    Transport.ClassCar.Luxury
);

const bike1 = new Transport.Motorbike(
    "Yamaha",
    "YZF-R3",
    2020,
    "2HGBH41JXMN109187",
    "B456CD",
    owner1,
    "Спортивная",
    true
);

const garage = new Transport.VehicleStorage<Transport.IVehicle>();
garage.addVehicle(car1);
garage.addVehicle(bike1);

console.log("Список транспортных средств в гараже:");
garage.getAllVehicles().forEach(vehicle => vehicle.showInfo());
