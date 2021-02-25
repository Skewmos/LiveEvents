<?php
namespace App\Controller;

use Exception;
use App\Security\AppAuthenticator;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use ApiPlatform\Core\Api\IriConverterInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Guard\GuardAuthenticatorHandler;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class SecurityController extends AbstractController{

    /**
     * @Route("/register", name="api_register", methods={"POST"})
     */

     public function register(Request $request, UserPasswordEncoderInterface $passwordEncoder, GuardAuthenticatorHandler $guardHandler, AppAuthenticator $authenticator): Response
     {

     }

    /**
     * @Route("/login", name="api_login", methods={"POST"} )
     */
    public function login(IriConverterInterface $iriConverter) {

        if (!$this->isGranted('IS_AUTHENTICATED_FULLY')) {
            return $this->json([
                'error' => 'Invalid login request: check that the Content-Type header is "application/json".'
            ], 400);
        }

        return new Response(null, 204, [
            'Location' => $iriConverter->getIriFromItem($this->getUser())
        ]);
    }

     /**
     * @Route("/logout", name="api_logout")
     */
    public function logout()
    {
        throw new Exception('should not be reached');
    }

}