export const imageMock =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATtSURBVHgB7d2/bxxFHIbxbxC4cQpMEROJUJgmDXQUpKHi74WGih4aKqdImqRIUsQp4hRJ4xSXeXW38dq5tX3efWdnZp+PNIoExhLwaG5uZn/cWa1W9wOY2FcBGBAWLAgLFoQFC8KCBWHBgrBgQViwICxYEBYsCAsWhAULwoIFYcGCsGBBWLAgLFgQFiwICxaEBQvCggVhwYKwYEFYsCAsWBAWLAgLFoQFC8KCBWHB4utAafbTeJDGYRpnaTxO431UhrDmtxfrkO6l8WMa31z6+9+n8XesI6sGYeWnkA7S+CHW0Rxc8/P7m585iYoQVh6HvfFdfDkrXWc/KkNYHv11kmalXUOqHmFNo1snfRvrdVJ1M8zUCOt2+uskfbQdBi4grJtTSApIM9Nt1kmLQljD9HGm9dHQNgCuQFjn9PGmGakLafHrpDGWHtbhpYGJLC2sbhuAdZJZ62Fdd1wCk5bDOkrj1yCmWbR62YxmKqKaUathac+JqGbEhX6wICxYEBYsCAsWhAULwoIFYcGCsGBBWLAgLFhwoV8ZTnrjl2jg2jDCmseHNF6k8SaN12l8jMYQVh66Pf5lrENSUM2FdBlheSik0zRexXpGOo2FIazpaH30NtYx6c/mZ6WrENbtdeukd7GQj7ddENbNdeukLqQPgUGENay/TtJHW1WPEZobYV2kkLTYZp000tLDWtw2QC5LC0sh6SOtC4l1ksmSwlJEfway4BAaFoQFC8KCBWHBgrBgQViwICxYEBYsCAsWhAULwoIFYcGC67H8ukeA6/GVe5shut5L13/pSovq3qB6HcLy0U2nV9182v/rupTnWRrPoxGENb27afwWu93N3H87xl40gLCmpbdd/BG3f2LzT9EIFu/TGRtVUwhrGvr4+z2I6jPCmsbPwWvoLiCs8bTgbmZtNBXCGu8o8AXCGo/ZagvCGoe3sg4grHHuBraqbYNUu9L7cb473T24Yy5sLwyoISxF9DDOD3K36c7ach/o8qyHASWHpaB0iPvwBj/bnbPpNnoFluuRQ2eRR3XPmCg1LEXyKHbfdNTPK8ZcM8nbyKO6y2pKDEv7Qo9inFxrH80kWuMdhM9pVDhjlfatUAe5Y6PK7WV4PY0KlRRWd5BbG/2Pd6219BH4OipUUli1HuQqqsfhod9b5cPhSglLs1XNRyNPYvqPLP2+Z1GpUsK6F/X7P6a7Zv355vdVq5SwHkQb/k3jOMY53vyeqpWy3dDSmZvC0DdFfRHZ5d/rZPPPNvE8+VLCcu4DzUF7T3/FeqP3aPPntsi616boufJNvaCAu3S8updbijZtFZeOqvRNUlsJzZ41lhKW/kO776eb+1hEES3m9XKlLN5z7NXkOjBGlBNWjvXFq0A2pYTlPm+TKo9GalXSjOWctbSDzXtzMirprHDsxuJcvxtblBSWZizHJSKKitkqs9Kux9L52JQficfBbDWLEm//+iemmbmIakal7rxr5tLHl67R2nXjVPtV/0Web5oYcGe1Wt2PcnU3RwydtfUpKM10ujaK27JmVnpYfd0tXopNkZ1txrvgLfPFqSksVIRnN8CCsGBBWLAgLFgQFiwICxaEBQvCggVhwYKwYEFYsCAsWBAWLAgLFoQFC8KCBWHBgrBgQViwICxYEBYsCAsWhAULwoIFYcGCsGBBWLAgLFgQFiwICxafAMShsv+IRWqaAAAAAElFTkSuQmCC';

export const trackMock = {
  id: '1',
  duration: 2000,
  artwork: {
    small: imageMock,
    medium: imageMock,
    large: '',
  },
  title: 'Citrus',
  artist: {
    _type: 'type',
    _ref: '_ref',
    id: '1',
    name: 'Dweeb',
    handle: 'dweeb',
    userpic: {
      small: imageMock,
      medium: imageMock,
      large: imageMock,
    },
    bio: [],
    location: '',
    follower_count: 0,
  },
};
