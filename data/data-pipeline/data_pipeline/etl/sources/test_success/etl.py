"""
For testing only, an etl job that always fails.
"""
from data_pipeline.etl.base import ExtractTransformLoad
from data_pipeline.utils import get_module_logger

logger = get_module_logger(__name__)


class TestSuccessETL(ExtractTransformLoad):
    def __init__(self):
        pass

    def extract(self) -> None:
        pass

    def transform(self) -> None:
        pass

    def load(self) -> None:
        pass
