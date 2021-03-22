<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * User
 *
 * @ORM\Table(name="USER")
 * @ORM\Entity
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 * @ApiResource
 * @UniqueEntity(fields={"email"}, message="There is already an account with this email")
 */
class User implements UserInterface
{
    /**
     * @var int
     *
     * @ORM\Column(name="IDUSER", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $iduser;

    /**
     * @var string|null
     *
     * @ORM\Column(name="FIRSTNAME", type="string", length=255, nullable=true, options={"fixed"=true})
     */
    private $firstname;

    /**
     * @var string|null
     *
     * @ORM\Column(name="LASTNAME", type="string", length=255, nullable=true, options={"fixed"=true})
     */
    private $lastname;

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="BIRTHDAY", type="date", nullable=true)
     */
    private $birthday;

    /**
     * @var string|null
     *
     * @ORM\Column(name="EMAIL", type="string", length=255, nullable=true, options={"fixed"=true})
     */
    private $email;

    /**
     * @var string|null
     *
     * @ORM\Column(name="PHONE", type="string", length=255, nullable=true, options={"fixed"=true})
     */
    private $phone;

    /**
     * @var string|null
     *
     * @ORM\Column(name="PASSWORD", type="string", length=255, nullable=true, options={"fixed"=true})
     */
    private $password;

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="CREATEDAT", type="datetime", nullable=true)
     */
    private $createdat;

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="UPDATEDAT", type="datetime", nullable=true)
     */
    private $updatedat;

    /**
     * @var string|null
     *
     * @ORM\Column(name="PICTUREURL", type="text", length=65535, nullable=true)
     */
    private $pictureurl;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isVerified = false;

    public function getIduser(): ?int
    {
        return $this->iduser;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(?string $firstname): self
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(?string $lastname): self
    {
        $this->lastname = $lastname;

        return $this;
    }

    public function getBirthday(): ?\DateTimeInterface
    {
        return $this->birthday;
    }

    public function setBirthday(?\DateTimeInterface $birthday): self
    {
        $this->birthday = $birthday;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(?string $phone): self
    {
        $this->phone = $phone;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(?string $password): self
    {
        $this->password = $password;

        return $this;
    }

    public function getCreatedat(): ?\DateTimeInterface
    {
        return $this->createdat;
    }

    public function setCreatedat(?\DateTimeInterface $createdat): self
    {
        $this->createdat = $createdat;

        return $this;
    }

    public function getUpdatedat(): ?\DateTimeInterface
    {
        return $this->updatedat;
    }

    public function setUpdatedat(?\DateTimeInterface $updatedat): self
    {
        $this->updatedat = $updatedat;

        return $this;
    }

    public function getPictureurl(): ?string
    {
        return $this->pictureurl;
    }

    public function setPictureurl(?string $pictureurl): self
    {
        $this->pictureurl = $pictureurl;

        return $this;
    }

    public function getSalt(){

    }

    public function getUsername() {

    }

    public function eraseCredentials() {

    }

    public function getRoles() {
        
    }

    public function isVerified(): bool
    {
        return $this->isVerified;
    }

    public function setIsVerified(bool $isVerified): self
    {
        $this->isVerified = $isVerified;

        return $this;
    }
}
