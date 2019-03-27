def fullname(self):
    if hasattr(self,'_fullname'):
        return self._fullname

    fullname='%s %s'%(self.name,self.suraname)
    self._fullname=fullname
    return fullname    