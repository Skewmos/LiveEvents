<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * Location
 *
 * @ORM\Table(name="LOCATION")
 * @ORM\Entity
 * @ORM\Entity(repositoryClass="App\Repository\LocationRepository")
 * @ApiResource
 */
class Location
{
    /**
     * @var int
     *
     * @ORM\Column(name="IDLOCATION", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idlocation;

    /**
     * @var string|null
     *
     * @ORM\Column(name="NAME", type="string", length=255, nullable=true, options={"fixed"=true})
     */
    private $name;

    /**
     * @var string|null
     *
     * @ORM\Column(name="LONGITUDE", type="decimal", precision=10, scale=2, nullable=true)
     */
    private $longitude;

    /**
     * @var string|null
     *
     * @ORM\Column(name="LATITUDE", type="decimal", precision=10, scale=2, nullable=true)
     */
    private $latitude;

    public function getIdlocation(): ?int
    {
        return $this->idlocation;
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

    public function getLongitude(): ?string
    {
        return $this->longitude;
    }

    public function setLongitude(?string $longitude): self
    {
        $this->longitude = $longitude;

        return $this;
    }

    public function getLatitude(): ?string
    {
        return $this->latitude;
    }

    public function setLatitude(?string $latitude): self
    {
        $this->latitude = $latitude;

        return $this;
    }


}
