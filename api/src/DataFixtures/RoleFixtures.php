<?php

namespace App\DataFixtures;

use App\Entity\Role;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class RoleFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $roleUser = new Role;
        $roleUser->setName('ROLE_USER');
        $roleAdmin = new Role;
        $roleAdmin->setName('ROLE_ADMIN');
        $roleModerateur = new Role;
        $roleModerateur->setName('ROLE_MODO');
        
        $manager->persist($roleUser);
        $manager->persist($roleModerateur);
        $manager->persist($roleAdmin);
        $manager->flush();
    }
}
