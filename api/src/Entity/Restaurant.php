<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * Restaurant
 * @ApiResource
 * @ORM\Table(name="RESTAURANT", indexes={@ORM\Index(name="I_FK_RESTAURANT_LOCATION", columns={"IDLOCATION"})})
 * @ORM\Entity
 */
class Restaurant
{
    /**
     * @var int
     *
     * @ORM\Column(name="IDRESTAURANT", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idrestaurant;

    /**
     * @var string|null
     *
     * @ORM\Column(name="NAME", type="string", length=255, nullable=true, options={"fixed"=true})
     */
    private $name;

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="OPENHOURS", type="time", nullable=true)
     */
    private $openhours;

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="CLOSEHOURS", type="time", nullable=true)
     */
    private $closehours;

    /**
     * @var \Location
     *
     * @ORM\ManyToOne(targetEntity="Location")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="IDLOCATION", referencedColumnName="IDLOCATION")
     * })
     */
    private $idlocation;

    public function getIdrestaurant(): ?int
    {
        return $this->idrestaurant;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getOpenhours(): ?\DateTimeInterface
    {
        return $this->openhours;
    }

    public function setOpenhours(?\DateTimeInterface $openhours): self
    {
        $this->openhours = $openhours;

        return $this;
    }

    public function getClosehours(): ?\DateTimeInterface
    {
        return $this->closehours;
    }

    public function setClosehours(?\DateTimeInterface $closehours): self
    {
        $this->closehours = $closehours;

        return $this;
    }

    public function getIdlocation(): ?Location
    {
        return $this->idlocation;
    }

    public function setIdlocation(?Location $idlocation): self
    {
        $this->idlocation = $idlocation;

        return $this;
    }


}
