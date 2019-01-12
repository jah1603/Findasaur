export function getDietImage(diet){
  switch(diet) {

  case 'carnivore': return require('../assets/icons/carnivore.png');
  case 'carnivore, piscivore': return require('../assets/icons/carnivore.png');
  case 'carnivore, omnivore': return require('../assets/icons/omnivore.png');
  case 'piscivore, insectivore': return require('../assets/icons/omnivore.png');
  case 'herbivore, omnivore': return require('../assets/icons/omnivore.png');
  case 'omnivore': return require('../assets/icons/omnivore.png');
  case 'herbivore': return require('../assets/icons/herbivore.png');
  case undefined: return require('../assets/icons/diet_unknown.png');

}
}

export function findSizeComparisonImage(dinosaur) {

  switch(dinosaur) {

  case 'Aardonyx': return require('../assets/human_size_comparison_images/Aardonyx.png');
  case 'Abelisaurus': return require('../assets/human_size_comparison_images/Abelisaurus.png');
  case 'Achelousaurus': return require('../assets/human_size_comparison_images/Achelousaurus.png');
  case 'Achillobator': return require('../assets/human_size_comparison_images/Achillobator.png');
  case 'Acrocanthosaurus': return require('../assets/human_size_comparison_images/Acrocanthosaurus.png');
  case 'Aegyptosaurus': return require('../assets/human_size_comparison_images/Aegyptosaurus.png');
  case 'Afrovenator': return require('../assets/human_size_comparison_images/Afrovenator.png');
  case 'Agilisaurus': return require('../assets/human_size_comparison_images/Agilisaurus.png');
  case 'Alamosaurus': return require('../assets/human_size_comparison_images/Alamosaurus.png');
  case 'Albertaceratops': return require('../assets/human_size_comparison_images/Albertaceratops.png');
  case 'Albertosaurus': return require('../assets/human_size_comparison_images/Albertosaurus.png');
  case 'Alectrosaurus': return require('../assets/human_size_comparison_images/Alectrosaurus.png');
  case 'Alioramus': return require('../assets/human_size_comparison_images/Alioramus.png');
  case 'Allosaurus': return require('../assets/human_size_comparison_images/Allosaurus.png');
  case 'Alvarezsaurus': return require('../assets/human_size_comparison_images/Alvarezsaurus.png');
  case 'Amargasaurus': return require('../assets/human_size_comparison_images/Amargasaurus.png');
  case 'Ammosaurus': return require('../assets/human_size_comparison_images/Ammosaurus.png');
  case 'Ampelosaurus': return require('../assets/human_size_comparison_images/Ampelosaurus.png');
  case 'Amygdalodon': return require('../assets/human_size_comparison_images/Amygdalodon.png');
  case 'Anchiceratops': return require('../assets/human_size_comparison_images/Anchiceratops.png');
  case 'Anchisaurus': return require('../assets/human_size_comparison_images/Anchisaurus.png');
  case 'Ankylosaurus': return require('../assets/human_size_comparison_images/Ankylosaurus.png');
  case 'Anserimimus': return require('../assets/human_size_comparison_images/Anserimimus.png');
  case 'Antarctosaurus': return require('../assets/human_size_comparison_images/Antarctosaurus.png');
  case 'Apatosaurus': return require('../assets/human_size_comparison_images/Apatosaurus.png');
  case 'Aragosaurus': return require('../assets/human_size_comparison_images/Aragosaurus.png');
  case 'Aralosaurus': return require('../assets/human_size_comparison_images/Aralosaurus.png');
  case 'Archaeoceratops': return require('../assets/human_size_comparison_images/Archaeoceratops.png');
  case 'Archaeopteryx': return require('../assets/human_size_comparison_images/Archaeopteryx.png');
  case 'Archaeornithomimus': return require('../assets/human_size_comparison_images/Archaeornithomimus.png');
  case 'Argentinosaurus': return require('../assets/human_size_comparison_images/Argentinosaurus.png');
  case 'Arrhinoceratops': return require('../assets/human_size_comparison_images/Arrhinoceratops.png');
  case 'Atlascopcosaurus': return require('../assets/human_size_comparison_images/Atlascopcosaurus.png');
  case 'Aucasaurus': return require('../assets/human_size_comparison_images/Aucasaurus.png');
  case 'Austrosaurus': return require('../assets/human_size_comparison_images/Austrosaurus.png');
  case 'Avaceratops': return require('../assets/human_size_comparison_images/Avaceratops.png');
  case 'Avimimus': return require('../assets/human_size_comparison_images/Avimimus.png');
  case 'Bactrosaurus': return require('../assets/human_size_comparison_images/Bactrosaurus.png');
  case 'Bagaceratops': return require('../assets/human_size_comparison_images/Bagaceratops.png');
  case 'Bambiraptor': return require('../assets/human_size_comparison_images/Bambiraptor.png');
  case 'Barapasaurus': return require('../assets/human_size_comparison_images/Barapasaurus.png');
  case 'Barosaurus': return require('../assets/human_size_comparison_images/Barosaurus.png');
  case 'Baryonyx': return require('../assets/human_size_comparison_images/Baryonyx.png');
  case 'Becklespinax': return require('../assets/human_size_comparison_images/Becklespinax.png');
  case 'Beipiaosaurus': return require('../assets/human_size_comparison_images/Beipiaosaurus.png');
  case 'Bellusaurus': return require('../assets/human_size_comparison_images/Bellusaurus.png');
  case 'Borogovia': return require('../assets/human_size_comparison_images/Borogovia.png');
  case 'Brachiosaurus': return require('../assets/human_size_comparison_images/Brachiosaurus.png');
  case 'Brachylophosaurus': return require('../assets/human_size_comparison_images/Brachylophosaurus.png');
  case 'Brachytrachelopan': return require('../assets/human_size_comparison_images/Brachytrachelopan.png');
  case 'Buitreraptor': return require('../assets/human_size_comparison_images/Buitreraptor.png');
  case 'Camarasaurus': return require('../assets/human_size_comparison_images/Camarasaurus.png');
  case 'Camptosaurus': return require('../assets/human_size_comparison_images/Camptosaurus.png');
  case 'Carcharodontosaurus': return require('../assets/human_size_comparison_images/Carcharodontosaurus.png');
  case 'Carnotaurus': return require('../assets/human_size_comparison_images/Carnotaurus.png');
  case 'Caudipteryx': return require('../assets/human_size_comparison_images/Caudipteryx.png');
  case 'Cedarpelta': return require('../assets/human_size_comparison_images/Cedarpelta.png');
  case 'Centrosaurus': return require('../assets/human_size_comparison_images/Centrosaurus.png');
  case 'Ceratosaurus': return require('../assets/human_size_comparison_images/Ceratosaurus.png');
  case 'Cetiosauriscus': return require('../assets/human_size_comparison_images/Cetiosauriscus.png');
  case 'Cetiosaurus': return require('../assets/human_size_comparison_images/Cetiosaurus.png');
  case 'Chaoyangsaurus': return require('../assets/human_size_comparison_images/Chaoyangsaurus.png');
  case 'Chasmosaurus': return require('../assets/human_size_comparison_images/Chasmosaurus.png');
  case 'Chindesaurus': return require('../assets/human_size_comparison_images/Chindesaurus.png');
  case 'Chinshakiangosaurus': return require('../assets/human_size_comparison_images/Chinshakiangosaurus.png');
  case 'Chirostenotes': return require('../assets/human_size_comparison_images/Chirostenotes.png');
  case 'Chubutisaurus': return require('../assets/human_size_comparison_images/Chubutisaurus.png');
  case 'Chungkingosaurus': return require('../assets/human_size_comparison_images/Chungkingosaurus.png');
  case 'Citipati': return require('../assets/human_size_comparison_images/Citipati.png');
  case 'Coelophysis': return require('../assets/human_size_comparison_images/Coelophysis.png');
  case 'Coelurus': return require('../assets/human_size_comparison_images/Coelurus.png');
  case 'Coloradisaurus': return require('../assets/human_size_comparison_images/Coloradisaurus.png');
  case 'Compsognathus': return require('../assets/human_size_comparison_images/Compsognathus.png');
  case 'Conchoraptor': return require('../assets/human_size_comparison_images/Conchoraptor.png');
  case 'Confuciusornis': return require('../assets/human_size_comparison_images/Confuciusornis.png');
  case 'Corythosaurus': return require('../assets/human_size_comparison_images/Corythosaurus.png');
  case 'Cryolophosaurus': return require('../assets/human_size_comparison_images/Cryolophosaurus.png');
  case 'Dacentrurus': return require('../assets/human_size_comparison_images/Dacentrurus.png');
  case 'Daspletosaurus': return require('../assets/human_size_comparison_images/Daspletosaurus.png');
  case 'Datousaurus': return require('../assets/human_size_comparison_images/Datousaurus.png');
  case 'Deinocheirus': return require('../assets/human_size_comparison_images/Deinocheirus.png');
  case 'Deltadromeus': return require('../assets/human_size_comparison_images/Deltadromeus.png');
  case 'Dicraeosaurus': return require('../assets/human_size_comparison_images/Dicraeosaurus.png');
  case 'Dilophosaurus': return require('../assets/human_size_comparison_images/Dilophosaurus.png');
  case 'Diplodocus': return require('../assets/human_size_comparison_images/Diplodocus.png');
  case 'Dromaeosaurus': return require('../assets/human_size_comparison_images/Dromaeosaurus.png');
  case 'Dromiceiomimus': return require('../assets/human_size_comparison_images/Dromiceiomimus.png');
  case 'Dryosaurus': return require('../assets/human_size_comparison_images/Dryosaurus.png');
  case 'Dryptosaurus': return require('../assets/human_size_comparison_images/Dryptosaurus.png');
  case 'Edmontonia': return require('../assets/human_size_comparison_images/Edmontonia.png');
  case 'Edmontosaurus': return require('../assets/human_size_comparison_images/Edmontosaurus.png');
  case 'Einiosaurus': return require('../assets/human_size_comparison_images/Einiosaurus.png');
  case 'Elaphrosaurus': return require('../assets/human_size_comparison_images/Elaphrosaurus.png');
  case 'Emausaurus': return require('../assets/human_size_comparison_images/Emausaurus.png');
  case 'Eoraptor': return require('../assets/human_size_comparison_images/Eoraptor.png');
  case 'Eotyrannus': return require('../assets/human_size_comparison_images/Eotyrannus.png');
  case 'Erketu': return require('../assets/human_size_comparison_images/Erketu.png');
  case 'Erlikosaurus': return require('../assets/human_size_comparison_images/Erlikosaurus.png');
  case 'Euhelopus': return require('../assets/human_size_comparison_images/Euhelopus.png');
  case 'Euoplocephalus': return require('../assets/human_size_comparison_images/Euoplocephalus.png');
  case 'Europasaurus': return require('../assets/human_size_comparison_images/Europasaurus.png');
  case 'Eustreptospondylus': return require('../assets/human_size_comparison_images/Eustreptospondylus.png');
  case 'Fukuiraptor': return require('../assets/human_size_comparison_images/Fukuiraptor.png');
  case 'Fukuisaurus': return require('../assets/human_size_comparison_images/Fukuisaurus.png');
  case 'Gallimimus': return require('../assets/human_size_comparison_images/Gallimimus.png');
  case 'Gargoyleosaurus': return require('../assets/human_size_comparison_images/Gargoyleosaurus.png');
  case 'Garudimimus': return require('../assets/human_size_comparison_images/Garudimimus.png');
  case 'Gasosaurus': return require('../assets/human_size_comparison_images/Gasosaurus.png');
  case 'Gasparinisaura': return require('../assets/human_size_comparison_images/Gasparinisaura.png');
  case 'Gastonia': return require('../assets/human_size_comparison_images/Gastonia.png');
  case 'Giganotosaurus': return require('../assets/human_size_comparison_images/Giganotosaurus.png');
  case 'Gilmoreosaurus': return require('../assets/human_size_comparison_images/Gilmoreosaurus.png');
  case 'Giraffatitan': return require('../assets/human_size_comparison_images/Giraffatitan.png');
  case 'Gobisaurus': return require('../assets/human_size_comparison_images/Gobisaurus.png');
  case 'Gorgosaurus': return require('../assets/human_size_comparison_images/Gorgosaurus.png');
  case 'Goyocephale': return require('../assets/human_size_comparison_images/Goyocephale.png');
  case 'Gryposaurus': return require('../assets/human_size_comparison_images/Gryposaurus.png');
  case 'Guaibasaurus': return require('../assets/human_size_comparison_images/Guaibasaurus.png');
  case 'Guanlong': return require('../assets/human_size_comparison_images/Guanlong.png');
  case 'Hadrosaurus': return require('../assets/human_size_comparison_images/Hadrosaurus.png');
  case 'Hagryphus': return require('../assets/human_size_comparison_images/Hagryphus.png');
  case 'Haplocanthosaurus': return require('../assets/human_size_comparison_images/Haplocanthosaurus.png');
  case 'Harpymimus': return require('../assets/human_size_comparison_images/Harpymimus.png');
  case 'Herrerasaurus': return require('../assets/human_size_comparison_images/Herrerasaurus.png');
  case 'Hesperosaurus': return require('../assets/human_size_comparison_images/Hesperosaurus.png');
  case 'Heterodontosaurus': return require('../assets/human_size_comparison_images/Heterodontosaurus.png');
  case 'Heyuannia': return require('../assets/human_size_comparison_images/Heyuannia.png');
  case 'Homalocephale': return require('../assets/human_size_comparison_images/Homalocephale.png');
  case 'Huayangosaurus': return require('../assets/human_size_comparison_images/Huayangosaurus.png');
  case 'Hylaeosaurus': return require('../assets/human_size_comparison_images/Hylaeosaurus.png');
  case 'Hypacrosaurus': return require('../assets/human_size_comparison_images/Hypacrosaurus.png');
  case 'Hypsilophodon': return require('../assets/human_size_comparison_images/Hypsilophodon.png');
  case 'Iguanodon': return require('../assets/human_size_comparison_images/Iguanodon.png');
  case 'Indosuchus': return require('../assets/human_size_comparison_images/Indosuchus.png');
  case 'Irritator': return require('../assets/human_size_comparison_images/Irritator.png');
  case 'Janenschia': return require('../assets/human_size_comparison_images/Janenschia.png');
  case 'Jaxartosaurus': return require('../assets/human_size_comparison_images/Jaxartosaurus.png');
  case 'Jingshanosaurus': return require('../assets/human_size_comparison_images/Jingshanosaurus.png');
  case 'Jobaria': return require('../assets/human_size_comparison_images/Jobaria.png');
  case 'Juravenator': return require('../assets/human_size_comparison_images/Juravenator.png');
  case 'Kentrosaurus': return require('../assets/human_size_comparison_images/Kentrosaurus.png');
  case 'Khaan': return require('../assets/human_size_comparison_images/Khaan.png');
  case 'Kotasaurus': return require('../assets/human_size_comparison_images/Kotasaurus.png');
  case 'Kritosaurus': return require('../assets/human_size_comparison_images/Kritosaurus.png');
  case 'Lambeosaurus': return require('../assets/human_size_comparison_images/Lambeosaurus.png');
  case 'Leaellynasaura': return require('../assets/human_size_comparison_images/Leaellynasaura.png');
  case 'Leptoceratops': return require('../assets/human_size_comparison_images/Leptoceratops.png');
  case 'Ligabuesaurus': return require('../assets/human_size_comparison_images/Ligabuesaurus.png');
  case 'Liliensternus': return require('../assets/human_size_comparison_images/Liliensternus.png');
  case 'Lophorhothon': return require('../assets/human_size_comparison_images/Lophorhothon.png');
  case 'Lophostropheus': return require('../assets/human_size_comparison_images/Lophostropheus.png');
  case 'Lufengosaurus': return require('../assets/human_size_comparison_images/Lufengosaurus.png');
  case 'Lurdusaurus': return require('../assets/human_size_comparison_images/Lurdusaurus.png');
  case 'Lycorhinus': return require('../assets/human_size_comparison_images/Lycorhinus.png');
  case 'Magyarosaurus': return require('../assets/human_size_comparison_images/Magyarosaurus.png');
  case 'Maiasaura': return require('../assets/human_size_comparison_images/Maiasaura.png');
  case 'Majungasaurus': return require('../assets/human_size_comparison_images/Majungasaurus.png');
  case 'Malawisaurus': return require('../assets/human_size_comparison_images/Malawisaurus.png');
  case 'Mamenchisaurus': return require('../assets/human_size_comparison_images/Mamenchisaurus.png');
  case 'Mapusaurus': return require('../assets/human_size_comparison_images/Mapusaurus.png');
  case 'Marshosaurus': return require('../assets/human_size_comparison_images/Marshosaurus.png');
  case 'Masiakasaurus': return require('../assets/human_size_comparison_images/Masiakasaurus.png');
  case 'Massospondylus': return require('../assets/human_size_comparison_images/Massospondylus.png');
  case 'Maxakalisaurus': return require('../assets/human_size_comparison_images/Maxakalisaurus.png');
  case 'Megalosaurus': return require('../assets/human_size_comparison_images/Megalosaurus.png');
  case 'Melanorosaurus': return require('../assets/human_size_comparison_images/Melanorosaurus.png');
  case 'Metriacanthosaurus': return require('../assets/human_size_comparison_images/Metriacanthosaurus.png');
  case 'Microceratus': return require('../assets/human_size_comparison_images/Microceratus.png');
  case 'Micropachycephalosaurus': return require('../assets/human_size_comparison_images/Micropachycephalosaurus.png');
  case 'Microraptor': return require('../assets/human_size_comparison_images/Microraptor.png');
  case 'Minmi': return require('../assets/human_size_comparison_images/Minmi.png');
  case 'Monolophosaurus': return require('../assets/human_size_comparison_images/Monolophosaurus.png');
  case 'Mononykus': return require('../assets/human_size_comparison_images/Mononykus.png');
  case 'Mussaurus': return require('../assets/human_size_comparison_images/Mussaurus.png');
  case 'Muttaburrasaurus': return require('../assets/human_size_comparison_images/Muttaburrasaurus.png');
  case 'Nanshiungosaurus': return require('../assets/human_size_comparison_images/Nanshiungosaurus.png');
  case 'Nedoceratops': return require('../assets/human_size_comparison_images/Nedoceratops.png');
  case 'Nemegtosaurus': return require('../assets/human_size_comparison_images/Nemegtosaurus.png');
  case 'Neovenator': return require('../assets/human_size_comparison_images/Neovenator.png');
  case 'Neuquenosaurus': return require('../assets/human_size_comparison_images/Neuquenosaurus.png');
  case 'Nigersaurus': return require('../assets/human_size_comparison_images/Nigersaurus.png');
  case 'Noasaurus': return require('../assets/human_size_comparison_images/Noasaurus.png');
  case 'Nodosaurus': return require('../assets/human_size_comparison_images/Nodosaurus.png');
  case 'Nomingia': return require('../assets/human_size_comparison_images/Nomingia.png');
  case 'Nothronychus': return require('../assets/human_size_comparison_images/Nothronychus.png');
  case 'Nqwebasaurus': return require('../assets/human_size_comparison_images/Nqwebasaurus.png');
  case 'Omeisaurus': return require('../assets/human_size_comparison_images/Omeisaurus.png');
  case 'Opisthocoelicaudia': return require('../assets/human_size_comparison_images/Opisthocoelicaudia.png');
  case 'Ornitholestes': return require('../assets/human_size_comparison_images/Ornitholestes.png');
  case 'Ornithomimus': return require('../assets/human_size_comparison_images/Ornithomimus.png');
  case 'Orodromeus': return require('../assets/human_size_comparison_images/Orodromeus.png');
  case 'Oryctodromeus': return require('../assets/human_size_comparison_images/Oryctodromeus.png');
  case 'Othnielia': return require('../assets/human_size_comparison_images/Othnielia.png');
  case 'Ouranosaurus': return require('../assets/human_size_comparison_images/Ouranosaurus.png');
  case 'Oviraptor': return require('../assets/human_size_comparison_images/Oviraptor.png');
  case 'Pachycephalosaurus': return require('../assets/human_size_comparison_images/Pachycephalosaurus.png');
  case 'Pachyrhinosaurus': return require('../assets/human_size_comparison_images/Pachyrhinosaurus.png');
  case 'Panoplosaurus': return require('../assets/human_size_comparison_images/Panoplosaurus.png');
  case 'Pantydraco': return require('../assets/human_size_comparison_images/Pantydraco.png');
  case 'Paralititan': return require('../assets/human_size_comparison_images/Paralititan.png');
  case 'Parasaurolophus': return require('../assets/human_size_comparison_images/Parasaurolophus.png');
  case 'Parksosaurus': return require('../assets/human_size_comparison_images/Parksosaurus.png');
  case 'Patagosaurus': return require('../assets/human_size_comparison_images/Patagosaurus.png');
  case 'Pelicanimimus': return require('../assets/human_size_comparison_images/Pelicanimimus.png');
  case 'Pentaceratops': return require('../assets/human_size_comparison_images/Pentaceratops.png');
  case 'Piatnitzkysaurus': return require('../assets/human_size_comparison_images/Piatnitzkysaurus.png');
  case 'Pinacosaurus': return require('../assets/human_size_comparison_images/Pinacosaurus.png');
  case 'Plateosaurus': return require('../assets/human_size_comparison_images/Plateosaurus.png');
  case 'Podokesaurus': return require('../assets/human_size_comparison_images/Podokesaurus.png');
  case 'Poekilopleuron': return require('../assets/human_size_comparison_images/Poekilopleuron.png');
  case 'Polacanthus': return require('../assets/human_size_comparison_images/Polacanthus.png');
  case 'Prenocephale': return require('../assets/human_size_comparison_images/Prenocephale.png');
  case 'Probactrosaurus': return require('../assets/human_size_comparison_images/Probactrosaurus.png');
  case 'Proceratosaurus': return require('../assets/human_size_comparison_images/Proceratosaurus.png');
  case 'Procompsognathus': return require('../assets/human_size_comparison_images/Procompsognathus.png');
  case 'Prosaurolophus': return require('../assets/human_size_comparison_images/Prosaurolophus.png');
  case 'Protarchaeopteryx': return require('../assets/human_size_comparison_images/Protarchaeopteryx.png');
  case 'Protoceratops': return require('../assets/human_size_comparison_images/Protoceratops.png');
  case 'Protohadros': return require('../assets/human_size_comparison_images/Protohadros.png');
  case 'Psittacosaurus': return require('../assets/human_size_comparison_images/Psittacosaurus.png');
  case 'Quaesitosaurus': return require('../assets/human_size_comparison_images/Quaesitosaurus.png');
  case 'Rebbachisaurus': return require('../assets/human_size_comparison_images/Rebbachisaurus.png');
  case 'Rhabdodon': return require('../assets/human_size_comparison_images/Rhabdodon.png');
  case 'Rhoetosaurus': return require('../assets/human_size_comparison_images/Rhoetosaurus.png');
  case 'Rinchenia': return require('../assets/human_size_comparison_images/Rinchenia.png');
  case 'Riojasaurus': return require('../assets/human_size_comparison_images/Riojasaurus.png');
  case 'Saichania': return require('../assets/human_size_comparison_images/Saichania.png');
  case 'Saltasaurus': return require('../assets/human_size_comparison_images/Saltasaurus.png');
  case 'Sarcosaurus': return require('../assets/human_size_comparison_images/Sarcosaurus.png');
  case 'Saurolophus': return require('../assets/human_size_comparison_images/Saurolophus.png');
  case 'Sauropelta': return require('../assets/human_size_comparison_images/Sauropelta.png');
  case 'Saurophaganax': return require('../assets/human_size_comparison_images/Saurophaganax.png');
  case 'Saurornithoides': return require('../assets/human_size_comparison_images/Saurornithoides.png');
  case 'Scelidosaurus': return require('../assets/human_size_comparison_images/Scelidosaurus.png');
  case 'Scutellosaurus': return require('../assets/human_size_comparison_images/Scutellosaurus.png');
  case 'Secernosaurus': return require('../assets/human_size_comparison_images/Secernosaurus.png');
  case 'Segisaurus': return require('../assets/human_size_comparison_images/Segisaurus.png');
  case 'Segnosaurus': return require('../assets/human_size_comparison_images/Segnosaurus.png');
  case 'Shanag': return require('../assets/human_size_comparison_images/Shanag.png');
  case 'Shantungosaurus': return require('../assets/human_size_comparison_images/Shantungosaurus.png');
  case 'Shunosaurus': return require('../assets/human_size_comparison_images/Shunosaurus.png');
  case 'Shuvuuia': return require('../assets/human_size_comparison_images/Shuvuuia.png');
  case 'Silvisaurus': return require('../assets/human_size_comparison_images/Silvisaurus.png');
  case 'Sinocalliopteryx': return require('../assets/human_size_comparison_images/Sinocalliopteryx.png');
  case 'Sinornithosaurus': return require('../assets/human_size_comparison_images/Sinornithosaurus.png');
  case 'Sinosauropteryx': return require('../assets/human_size_comparison_images/Sinosauropteryx.png');
  case 'Sinovenator': return require('../assets/human_size_comparison_images/Sinovenator.png');
  case 'Sinraptor': return require('../assets/human_size_comparison_images/Sinraptor.png');
  case 'Sonidosaurus': return require('../assets/human_size_comparison_images/Sonidosaurus.png');
  case 'Spinosaurus': return require('../assets/human_size_comparison_images/Spinosaurus.png');
  case 'Staurikosaurus': return require('../assets/human_size_comparison_images/Staurikosaurus.png');
  case 'Stegoceras': return require('../assets/human_size_comparison_images/Stegoceras.png');
  case 'Stegosaurus': return require('../assets/human_size_comparison_images/Stegosaurus.png');
  case 'Stenopelix': return require('../assets/human_size_comparison_images/Stenopelix.png');
  case 'Struthiomimus': return require('../assets/human_size_comparison_images/Struthiomimus.png');
  case 'Struthiosaurus': return require('../assets/human_size_comparison_images/Struthiosaurus.png');
  case 'Styracosaurus': return require('../assets/human_size_comparison_images/Styracosaurus.png');
  case 'Suchomimus': return require('../assets/human_size_comparison_images/Suchomimus.png');
  case 'Supersaurus': return require('../assets/human_size_comparison_images/Supersaurus.png');
  case 'Talarurus': return require('../assets/human_size_comparison_images/Talarurus.png');
  case 'Tarbosaurus': return require('../assets/human_size_comparison_images/Tarbosaurus.png');
  case 'Tarchia': return require('../assets/human_size_comparison_images/Tarchia.png');
  case 'Telmatosaurus': return require('../assets/human_size_comparison_images/Telmatosaurus.png');
  case 'Tenontosaurus': return require('../assets/human_size_comparison_images/Tenontosaurus.png');
  case 'Thecodontosaurus': return require('../assets/human_size_comparison_images/Thecodontosaurus.png');
  case 'Thescelosaurus': return require('../assets/human_size_comparison_images/Thescelosaurus.png');
  case 'Torosaurus': return require('../assets/human_size_comparison_images/Torosaurus.png');
  case 'Torvosaurus': return require('../assets/human_size_comparison_images/Torvosaurus.png');
  case 'Triceratops': return require('../assets/human_size_comparison_images/Triceratops.png');
  case 'Troodon': return require('../assets/human_size_comparison_images/Troodon.png');
  case 'Tsintaosaurus': return require('../assets/human_size_comparison_images/Tsintaosaurus.png');
  case 'Tuojiangosaurus': return require('../assets/human_size_comparison_images/Tuojiangosaurus.png');
  case 'Tylocephale': return require('../assets/human_size_comparison_images/Tylocephale.png');
  case 'Tyrannosaurus': return require('../assets/human_size_comparison_images/Tyrannosaurus.png');
  case 'Unenlagia': return require('../assets/human_size_comparison_images/Unenlagia.png');
  case 'Urbacodon': return require('../assets/human_size_comparison_images/Urbacodon.png');
  case 'Utahraptor': return require('../assets/human_size_comparison_images/Utahraptor.png');
  case 'Valdosaurus': return require('../assets/human_size_comparison_images/Valdosaurus.png');
  case 'Velociraptor': return require('../assets/human_size_comparison_images/Velociraptor.png');
  case 'Vulcanodon': return require('../assets/human_size_comparison_images/Vulcanodon.png');
  case 'Yandusaurus': return require('../assets/human_size_comparison_images/Yandusaurus.png');
  case 'Yangchuanosaurus': return require('../assets/human_size_comparison_images/Yangchuanosaurus.png');
  case 'Yimenosaurus': return require('../assets/human_size_comparison_images/Yimenosaurus.png');
  case 'Yinlong': return require('../assets/human_size_comparison_images/Yinlong.png');
  case 'Yuanmousaurus': return require('../assets/human_size_comparison_images/Yuanmousaurus.png');
  case 'Yunnanosaurus': return require('../assets/human_size_comparison_images/Yunnanosaurus.png');
  case 'Zalmoxes': return require('../assets/human_size_comparison_images/Zalmoxes.png');
  case 'Zephyrosaurus': return require('../assets/human_size_comparison_images/Zephyrosaurus.png');

}
}
