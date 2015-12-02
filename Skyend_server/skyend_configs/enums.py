

PRO = 'PRO'
WEB = 'WEB'
VENTAS = 'VENTAS'
BACKEND = 'BACKEND'
MODULE_CHOICES = (
    (PRO, 'Profesional'),
    (WEB, 'Web informativa'),
    (VENTAS, 'Ventas'),
    (BACKEND, 'Backend Manager'),
)


ACT = 'PRO'
INACT = 'WEB'
OTRO = 'VENTAS'
ESTADO_CHOICES = (
    (ACT, 'Activo'),
    (INACT, 'Baja'),
    (OTRO, 'Otro'),
)
