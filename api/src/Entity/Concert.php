<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * Concert
 * @ApiResource
 * @ORM\Table(name="CONCERT", indexes={@ORM\Index(name="I_FK_CONCERT_LOCATION", columns={"IDLOCATION"})})
 * @ORM\Entity
 */
class Concert
{
    /**
     * @var int
     *
     * @ORM\Column(name="IDCONCERT", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idconcert;

    /**
     * @var string|null
     *
     * @ORM\Column(name="NAME", type="string", length=255, nullable=true, options={"fixed"=true})
     */
    private $name;

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="DATESTART", type="datetime", nullable=true)
     */
    private $datestart;

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="DATEEND", type="datetime", nullable=true)
     */
    private $dateend;

    /**
     * @var int|null
     *
     * @ORM\Column(name="NUMBERPLACE", type="bigint", nullable=true)
     */
    private $numberplace;

    /**
     * @var int|null
     *
     * @ORM\Column(name="PLACESOLD", type="bigint", nullable=true)
     */
    private $placesold;

    /**
     * @var \Location
     *
     * @ORM\ManyToOne(targetEntity="Location")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="IDLOCATION", referencedColumnName="IDLOCATION")
     * })
     */
    private $idlocation;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="MusicalGenre", mappedBy="idconcert")
     */
    private $idmusicalgenre;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Artist", mappedBy="idconcert")
     */
    private $idartist;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->idmusicalgenre = new \Doctrine\Common\Collections\ArrayCollection();
        $this->idartist = new \Doctrine\Common\Collections\ArrayCollection();
    }

    public function getIdconcert(): ?int
    {
        return $this->idconcert;
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

    public function getDatestart(): ?\DateTimeInterface
    {
        return $this->datestart;
    }

    public function setDatestart(?\DateTimeInterface $datestart): self
    {
        $this->datestart = $datestart;

        return $this;
    }

    public function getDateend(): ?\DateTimeInterface
    {
        return $this->dateend;
    }

    public function setDateend(?\DateTimeInterface $dateend): self
    {
        $this->dateend = $dateend;

        return $this;
    }

    public function getNumberplace(): ?string
    {
        return $this->numberplace;
    }

    public function setNumberplace(?string $numberplace): self
    {
        $this->numberplace = $numberplace;

        return $this;
    }

    public function getPlacesold(): ?string
    {
        return $this->placesold;
    }

    public function setPlacesold(?string $placesold): self
    {
        $this->placesold = $placesold;

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

    /**
     * @return Collection|MusicalGenre[]
     */
    public function getIdmusicalgenre(): Collection
    {
        return $this->idmusicalgenre;
    }

    public function addIdmusicalgenre(MusicalGenre $idmusicalgenre): self
    {
        if (!$this->idmusicalgenre->contains($idmusicalgenre)) {
            $this->idmusicalgenre[] = $idmusicalgenre;
            $idmusicalgenre->addIdconcert($this);
        }

        return $this;
    }

    public function removeIdmusicalgenre(MusicalGenre $idmusicalgenre): self
    {
        if ($this->idmusicalgenre->removeElement($idmusicalgenre)) {
            $idmusicalgenre->removeIdconcert($this);
        }

        return $this;
    }

    /**
     * @return Collection|Artist[]
     */
    public function getIdartist(): Collection
    {
        return $this->idartist;
    }

    public function addIdartist(Artist $idartist): self
    {
        if (!$this->idartist->contains($idartist)) {
            $this->idartist[] = $idartist;
            $idartist->addIdconcert($this);
        }

        return $this;
    }

    public function removeIdartist(Artist $idartist): self
    {
        if ($this->idartist->removeElement($idartist)) {
            $idartist->removeIdconcert($this);
        }

        return $this;
    }

}
