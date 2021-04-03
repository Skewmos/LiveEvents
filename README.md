[![Minimum PHP Version](https://img.shields.io/badge/php-%3E%3D%207.2.5-8892BF.svg)](https://php.net/)
[![Minimum SYMFONY Version](https://img.shields.io/badge/Symfony-5-blueviolet)](https://symfony.com/doc/current/index.html)
[![Minimum MYSQL Version](https://img.shields.io/badge/MYSQL-5.7-blue)](https://dev.mysql.com/doc/refman/5.7/en/)
[![Minimum REACT Version](https://img.shields.io/badge/React-v17.0.1-brightgreen)](https://reactjs.org/docs/getting-started.html)


# Nationsounds

Chaque année depuis 3 ans, la société d’évènementiel « Live Events » organise un festival de musique
appelé « Nation Sounds » dans la région parisienne afin de récolter des fonds pour une association
humanitaire. Plusieurs centaines de milliers de personnes sont attendues sur le site du festival. « Live
Events » est une entreprise d’organisation et de promotion de spectacles basée sur Paris et créée en
2005. Elle compte aujourd’hui une centaine d’employés. 

Le projet est réaliser sous symfony et api-plateforms pour la parti backend et pour la parti frontend reactjs.

## Installation
Nationsounds fonctionne avec docker il vous faudra donc vous munir de [docker](https://www.docker.com/)

Pour Windows : 

Suivre les indications [suivantes](https://docs.docker.com/docker-for-windows/install/)

Pour linux : 

```bash
sudo apt update -y & sudo apt upgrade -y
sudo apt-get install  curl apt-transport-https ca-certificates software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt update
sudo apt install docker-ce
```

Pour Mac : 

Suivre les indications [suivantes](https://docs.docker.com/docker-for-mac/install/)

# Déploiement

Pour déployer le projet il vous suffira de lancer la commande suivante : 

```bash
docker-compose up -d
```

Pour éteindre l'ensemble des containers :

```bash
docker-compose down 
```

#Technologies

Le projet tourne avec les technologies suivantes : 

  - [PHP 7.4](php.net)
  - [Symfony 5](https://symfony.com/5)
  - [Doctrine](https://symfony.com/doc/current/doctrine.html)
  - [Composer](https://getcomposer.org/doc/)
  - [ReactJS](https://reactjs.org/)

# Versionnement

 Utilisation la méthodologie [GitFlow](https://danielkummer.github.io/git-flow-cheatsheet/) 
 
# Auteurs

  - Legrand Jérémie => [Skewmos](https://github.com/Skewmos)
  - Leroy Fiona => [FionaLeroy](https://github.com/FionaLeroy)
