<?php

namespace App\Controller\Admin;

use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class UserCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return User::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideWhenUpdating()->hideWhenCreating(),
            TextField::new('email'),
            TextField::new('username'),
            ChoiceField::new('roles', 'Rôles')->setChoices(['Utilisateur'=>'ROLE_USER', 'Administrateur'=>'ROLE_ADMIN','Scientifique'=>'ROLE_SCIENTIST'])->allowMultipleChoices(),

        ];
    }
}
