<?php

namespace App\DataFixtures;

use App\Entity\Bmp180;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class Bmp180App extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $i=random_int(5,60);
        for ($a = 0;$a<$i; $a++){
            $bmp=new Bmp180();
            $bmp->setAltitude(random_int(0.0,10.0));
            $bmp->setPression(random_int(999.0,1100.0));
            $bmp->setTemperature(random_int(5.0,40.0));
            $bmp->setDate("31/03/2022");
            $heure=random_int(0,23);
            $minute=random_int(0,59);
            $bmp->setHeure("".$heure.":".$minute."");
            $manager->persist($bmp);


        }
        // $product = new Product();
        // $manager->persist($product);

        $manager->flush();
    }
}
