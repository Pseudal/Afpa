<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHER nom" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2defaut="" F2lignes="" F2para="" F2etat="inactif"/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param epaisseurPoint="2" arrondiAuto="vrai" epaisseurLigne="2" nbDecimales="8" maxBoucle="500000" totalBoucles="5000000" totalAffichages="1000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="nom EST_DU_TYPE CHAINE" code="1#CHAINE#nom"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="LIRE nom" code="2#nom#pasliste"/>
        <item algoitem="AFFICHER &quot;bonjour &quot;" code="4#bonjour #0"/>
        <item algoitem="AFFICHER nom" code="3#nom#1#pasliste"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
