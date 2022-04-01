<?php

namespace App\Controller;

use App\Repository\Bmp180Repository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    #[Route('/', name: 'app_homepage')]
    public function index(Bmp180Repository $bmp180Repository): Response
    {
//        dd($bmp180Repository->findAll());
        return $this->render('Default/index.html.twig', [
            'bmp180'=>$bmp180Repository->findAll()

        ]);
    }

    #[Route('/flux-video', name: 'app_flux-video')]
    public function fluxVideo(): Response
    {
        return $this->render('Default/fluxVideo.html.twig', [


        ]);
    }


}
