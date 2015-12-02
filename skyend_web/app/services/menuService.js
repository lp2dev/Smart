backendApp
//------------------------------
// TODO: API menu
// por lo pronto colocar aqui el menu para su Modelo, vease test1
//------------------------------
.factory("menuService", [
  '$location',
  '$rootScope',
  '$http',
  '$window',
  function($location, $rootScope, $http, $window) {

    var version = {};

    var sections = [
    {
      name: 'Getting Started',
      state: 'getting-started',
      url: '/getting-started',
      type: 'link'
    }

    ];
    


    sections.push({
      name: 'API Reference',
      type: 'heading',
      children: [
      {
        name: 'Layout',
        type: 'toggle',
        pages: [{
          name : 'Test 2',
          state: 'test2',
          url: '/CSS/test2',
          type: 'link'
        },
        {
          name : 'test1',
          state: 'test1',
          url: '/CSS/test1',
          type: 'link'
        }]
      }]
    });

    sections.push({
   
        name: 'CONFIGS',
        type: 'toggle',
        pages: [
        {
          name : 'Natural Person',
          state: 'naturalperson',
          url: '/naturalperson',
          type: 'link'
        },
        {
          name : 'Unidad Medida',
          state: 'unidadmedida',
          url: '/unidadmedida',
          type: 'link'
        }

        ]

    });

        sections.push({
   
        name: 'Tablas',
        type: 'toggle',
        pages: [
        {
          name : 'Contrato',
          state: 'contrato',
          url: '/contrato',
          type: 'link'
        },
        {
          name : 'Documento',
          state: 'documento',
          url: '/documento',
          type: 'link'
        },
          {
          name : 'Curso',
          state: 'curso',
          url: '/curso',
          type: 'link'
        }

        ]

    });


    sections.push(
    {
      name : 'Test1x',
          state: 'test1x',
          url: '/test1x',
          type: 'link'
    }
    );


    function sortByName(a,b) {
      return a.name < b.name ? -1 : 1;
    }

    var self;

    $rootScope.$on('$locationChangeSuccess', onLocationChange);



    return self = {
      version   :  version,
      sections  : sections,

      selectSection: function(section) {
        self.openedSection = section;
      },
      toggleSelectSection: function(section) {
        self.openedSection = (self.openedSection === section ? null : section);
      },
      isSectionSelected: function(section) {
        return self.openedSection === section;
      },

      selectPage: function(section, page) {
        self.currentSection = section;
        self.currentPage = page;
      },
      isPageSelected: function(page) {
        return self.currentPage === page;
      }
    };

    function sortByHumanName(a,b) {
      return (a.humanName < b.humanName) ? -1 :
      (a.humanName > b.humanName) ? 1 : 0;
    }

    function onLocationChange() {
      var path = $location.path();
      var introLink = {
        name: "Introduction",
        url:  "/",
        type: "link"
      };

      if (path == '/') {
        self.selectSection(introLink);
        self.selectPage(introLink, introLink);
        return;
      }

      var matchPage = function(section, page) {
        if (path === page.url) {
          self.selectSection(section);
          self.selectPage(section, page);
        }
      };

      sections.forEach(function(section) {
        if(section.children) {
        // matches nested section toggles, such as API or Customization
        section.children.forEach(function(childSection){
          if(childSection.pages){
            childSection.pages.forEach(function(page){
              matchPage(childSection, page);
            });
          }
        });
      }
      else if(section.pages) {
        // matches top-level section toggles, such as Demos
        section.pages.forEach(function(page) {
          matchPage(section, page);
        });
      }
      else if (section.type === 'link') {
        // matches top-level links, such as "Getting Started"
        matchPage(section, section);
      }
    });
    }
  }]);