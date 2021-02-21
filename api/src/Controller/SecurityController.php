<?php
namespace App\Controller;

use ApiPlatform\Core\Api\IriConverterInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class SecurityController extends AbstractController{

    /**
     * 
     * @Route("/login", name="api_login", methods={"POST"} )
     * 
     */
    public function login(IriConverterInterface $iriConverterInterface) {

        if(!$this->isGranted('IS_AUTHENTICATED_FULLY')) {
            return $this->json([
                'error' => 'Invalid login request : check that the content-type  header is "application/json"'
            ], 400);
        }

        return new Response(null, 204, [
            'Location' => $iriConverter->getIriFromItem($this->getUser())
        ]);
    }

}